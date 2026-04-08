#!/usr/bin/env python3

from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import os
import socket
import webbrowser


HOST = "0.0.0.0"
PORT = 8000


class TriviaHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


def get_local_ip():
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        sock.connect(("8.8.8.8", 80))
        ip = sock.getsockname()[0]
        sock.close()
        return ip
    except OSError:
        return "127.0.0.1"


def main():
  project_dir = Path(__file__).resolve().parent
  os.chdir(project_dir)

  server = ThreadingHTTPServer((HOST, PORT), TriviaHandler)
  local_url = f"http://127.0.0.1:{PORT}/index.html"
  network_url = f"http://{get_local_ip()}:{PORT}/index.html"

  print(f"Serving Trivia Sprint at {local_url}")
  print(f"Local network URL: {network_url}")
  print("Press Ctrl+C to stop the server.")

  try:
      webbrowser.open(local_url)
  except Exception:
      pass

  try:
      server.serve_forever()
  except KeyboardInterrupt:
      print("\nServer stopped.")
  finally:
      server.server_close()


if __name__ == "__main__":
    main()
