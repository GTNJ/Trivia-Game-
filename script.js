const QUESTIONS_PER_GAME = 10;
const TIME_PER_QUESTION = 10;
const RECENT_HISTORY_LIMIT = QUESTIONS_PER_GAME * 2;

const triviaTopics = {
  "General Knowledge": {
    description: "Wide-ranging facts with focused subtopics.",
    subcategories: {
      "World Facts": {
        description: "Countries, capitals, landmarks, and global facts.",
        questions: [
          { id: "gk-world-1", question: "What is the capital of Canada?", answers: ["Toronto", "Vancouver", "Ottawa", "Montreal"], correctAnswer: "Ottawa" },
          { id: "gk-world-2", question: "Which river runs through Egypt?", answers: ["Amazon", "Danube", "Nile", "Yangtze"], correctAnswer: "Nile" },
          { id: "gk-world-3", question: "Which country is home to the city of Kyoto?", answers: ["China", "South Korea", "Thailand", "Japan"], correctAnswer: "Japan" },
          { id: "gk-world-4", question: "Mount Kilimanjaro is located in which country?", answers: ["Kenya", "Tanzania", "Ethiopia", "Uganda"], correctAnswer: "Tanzania" },
          { id: "gk-world-5", question: "Which desert covers much of northern Africa?", answers: ["Gobi", "Sahara", "Atacama", "Kalahari"], correctAnswer: "Sahara" },
          { id: "gk-world-6", question: "Which country has the most population in the world?", answers: ["India", "China", "United States", "Indonesia"], correctAnswer: "India" },
          { id: "gk-world-7", question: "What is the capital of Brazil?", answers: ["Rio de Janeiro", "Sao Paulo", "Brasilia", "Salvador"], correctAnswer: "Brasilia" },
          { id: "gk-world-8", question: "The Great Barrier Reef is off the coast of which country?", answers: ["New Zealand", "Australia", "South Africa", "Mexico"], correctAnswer: "Australia" },
          { id: "gk-world-9", question: "Which European city is known as the City of Canals?", answers: ["Rome", "Vienna", "Venice", "Prague"], correctAnswer: "Venice" },
          { id: "gk-world-10", question: "Which ocean lies between Africa and Australia?", answers: ["Atlantic", "Indian", "Arctic", "Pacific"], correctAnswer: "Indian" },
          { id: "gk-world-11", question: "Which country is famous for the maple leaf symbol?", answers: ["Canada", "Sweden", "Norway", "Switzerland"], correctAnswer: "Canada" },
          { id: "gk-world-12", question: "What is the capital city of South Africa's legislative branch?", answers: ["Pretoria", "Bloemfontein", "Durban", "Cape Town"], correctAnswer: "Cape Town" },
        ],
      },
      Geography: {
        description: "Landforms, climates, and maps.",
        questions: [
          { id: "gk-geo-1", question: "What is the longest mountain range on land?", answers: ["Alps", "Rockies", "Andes", "Himalayas"], correctAnswer: "Andes" },
          { id: "gk-geo-2", question: "Which continent is the driest inhabited one?", answers: ["Asia", "Australia", "Africa", "Europe"], correctAnswer: "Australia" },
          { id: "gk-geo-3", question: "Which line divides the Earth into northern and southern halves?", answers: ["Prime Meridian", "Equator", "Tropic of Cancer", "International Date Line"], correctAnswer: "Equator" },
          { id: "gk-geo-4", question: "What is the largest island in the world?", answers: ["Greenland", "Madagascar", "Borneo", "Iceland"], correctAnswer: "Greenland" },
          { id: "gk-geo-5", question: "Which U.S. state is known as the Grand Canyon State?", answers: ["Nevada", "Utah", "Arizona", "Colorado"], correctAnswer: "Arizona" },
          { id: "gk-geo-6", question: "Which sea separates Europe and Africa?", answers: ["Black Sea", "Caspian Sea", "Mediterranean Sea", "Red Sea"], correctAnswer: "Mediterranean Sea" },
          { id: "gk-geo-7", question: "Which country contains the most volcanoes in the world?", answers: ["Japan", "Indonesia", "Iceland", "Chile"], correctAnswer: "Indonesia" },
          { id: "gk-geo-8", question: "What is the smallest continent by land area?", answers: ["Europe", "Antarctica", "Australia", "South America"], correctAnswer: "Australia" },
          { id: "gk-geo-9", question: "Which waterfall system sits on the border of Zambia and Zimbabwe?", answers: ["Iguazu Falls", "Victoria Falls", "Niagara Falls", "Angel Falls"], correctAnswer: "Victoria Falls" },
          { id: "gk-geo-10", question: "What do we call land completely surrounded by water?", answers: ["Peninsula", "Isthmus", "Island", "Delta"], correctAnswer: "Island" },
          { id: "gk-geo-11", question: "Which country has the most time zones?", answers: ["Russia", "France", "United States", "Australia"], correctAnswer: "France" },
          { id: "gk-geo-12", question: "Which hemisphere contains most of Earth's landmass?", answers: ["Southern", "Western", "Eastern", "Northern"], correctAnswer: "Northern" },
        ],
      },
      Culture: {
        description: "Language, traditions, and everyday world knowledge.",
        questions: [
          { id: "gk-culture-1", question: "Which language has the most native speakers worldwide?", answers: ["English", "Spanish", "Hindi", "Mandarin Chinese"], correctAnswer: "Mandarin Chinese" },
          { id: "gk-culture-2", question: "Which holiday is associated with carved pumpkins?", answers: ["Easter", "Halloween", "Diwali", "Hanukkah"], correctAnswer: "Halloween" },
          { id: "gk-culture-3", question: "Which board game uses pieces called king, queen, rook, and bishop?", answers: ["Checkers", "Chess", "Go", "Monopoly"], correctAnswer: "Chess" },
          { id: "gk-culture-4", question: "What do bees produce?", answers: ["Wax and honey", "Milk and wax", "Sugar and honey", "Pollen and syrup"], correctAnswer: "Wax and honey" },
          { id: "gk-culture-5", question: "Which meal is traditionally eaten first in the day?", answers: ["Brunch", "Dinner", "Breakfast", "Supper"], correctAnswer: "Breakfast" },
          { id: "gk-culture-6", question: "What color do you get by mixing blue and yellow?", answers: ["Purple", "Green", "Orange", "Brown"], correctAnswer: "Green" },
          { id: "gk-culture-7", question: "Which hand is usually used to wear a wedding ring in many countries?", answers: ["Left", "Right", "Both", "Neither"], correctAnswer: "Left" },
          { id: "gk-culture-8", question: "What is sushi traditionally wrapped in?", answers: ["Rice paper", "Seaweed", "Lettuce", "Flatbread"], correctAnswer: "Seaweed" },
          { id: "gk-culture-9", question: "Which sport uses a shuttlecock?", answers: ["Tennis", "Badminton", "Squash", "Table Tennis"], correctAnswer: "Badminton" },
          { id: "gk-culture-10", question: "Which day comes after Friday?", answers: ["Thursday", "Sunday", "Saturday", "Monday"], correctAnswer: "Saturday" },
          { id: "gk-culture-11", question: "Which shape has three sides?", answers: ["Triangle", "Rectangle", "Hexagon", "Circle"], correctAnswer: "Triangle" },
          { id: "gk-culture-12", question: "What is frozen water called?", answers: ["Steam", "Mist", "Ice", "Dew"], correctAnswer: "Ice" },
        ],
      },
    },
  },
  Science: {
    description: "Choose a difficulty level from basic science to challenge mode.",
    subcategories: {
      Easy: {
        description: "Friendly science basics.",
        questions: [
          { id: "sci-e-1", question: "What planet do humans live on?", answers: ["Mars", "Earth", "Venus", "Jupiter"], correctAnswer: "Earth" },
          { id: "sci-e-2", question: "What do plants need from sunlight to make food?", answers: ["Photosynthesis", "Evaporation", "Fermentation", "Respiration"], correctAnswer: "Photosynthesis" },
          { id: "sci-e-3", question: "How many legs does an insect usually have?", answers: ["4", "6", "8", "10"], correctAnswer: "6" },
          { id: "sci-e-4", question: "Which gas do humans need to breathe?", answers: ["Carbon dioxide", "Oxygen", "Helium", "Nitrogen"], correctAnswer: "Oxygen" },
          { id: "sci-e-5", question: "What do you call water that falls from clouds?", answers: ["Fog", "Steam", "Rain", "Dew"], correctAnswer: "Rain" },
          { id: "sci-e-6", question: "Which part of your body helps you hear?", answers: ["Eyes", "Ears", "Nose", "Hands"], correctAnswer: "Ears" },
          { id: "sci-e-7", question: "What force pulls things toward Earth?", answers: ["Magnetism", "Pressure", "Gravity", "Friction"], correctAnswer: "Gravity" },
          { id: "sci-e-8", question: "What is the boiling point of water in Celsius?", answers: ["50", "75", "100", "150"], correctAnswer: "100" },
          { id: "sci-e-9", question: "Which star is closest to Earth?", answers: ["Sirius", "Polaris", "The Sun", "Betelgeuse"], correctAnswer: "The Sun" },
          { id: "sci-e-10", question: "What do we call animals that eat plants?", answers: ["Carnivores", "Omnivores", "Herbivores", "Predators"], correctAnswer: "Herbivores" },
          { id: "sci-e-11", question: "What part of the plant is usually underground?", answers: ["Stem", "Leaf", "Root", "Flower"], correctAnswer: "Root" },
          { id: "sci-e-12", question: "What is H2O commonly called?", answers: ["Salt", "Water", "Hydrogen", "Oxygen"], correctAnswer: "Water" },
        ],
      },
      Medium: {
        description: "Steady challenge across biology, chemistry, and physics.",
        questions: [
          { id: "sci-m-1", question: "What is the chemical symbol for sodium?", answers: ["So", "Na", "S", "Sd"], correctAnswer: "Na" },
          { id: "sci-m-2", question: "Which organ pumps blood around the human body?", answers: ["Liver", "Lung", "Heart", "Kidney"], correctAnswer: "Heart" },
          { id: "sci-m-3", question: "What is the center of an atom called?", answers: ["Core", "Kernel", "Nucleus", "Orbit"], correctAnswer: "Nucleus" },
          { id: "sci-m-4", question: "Which blood type is known as the universal donor?", answers: ["AB+", "O-", "A+", "B-"], correctAnswer: "O-" },
          { id: "sci-m-5", question: "What kind of energy is stored in food?", answers: ["Electrical", "Chemical", "Nuclear", "Thermal"], correctAnswer: "Chemical" },
          { id: "sci-m-6", question: "Which planet has the most moons currently known?", answers: ["Mars", "Jupiter", "Saturn", "Neptune"], correctAnswer: "Saturn" },
          { id: "sci-m-7", question: "How many bones does an adult human typically have?", answers: ["196", "206", "216", "226"], correctAnswer: "206" },
          { id: "sci-m-8", question: "What is the hardest natural substance on Earth?", answers: ["Quartz", "Diamond", "Steel", "Granite"], correctAnswer: "Diamond" },
          { id: "sci-m-9", question: "Which organ filters blood to make urine?", answers: ["Pancreas", "Kidney", "Stomach", "Spleen"], correctAnswer: "Kidney" },
          { id: "sci-m-10", question: "What is the process of a liquid changing into a gas?", answers: ["Condensation", "Evaporation", "Freezing", "Melting"], correctAnswer: "Evaporation" },
          { id: "sci-m-11", question: "What part of the cell contains genetic material?", answers: ["Membrane", "Ribosome", "Nucleus", "Vacuole"], correctAnswer: "Nucleus" },
          { id: "sci-m-12", question: "What is measured with a barometer?", answers: ["Temperature", "Wind speed", "Air pressure", "Humidity"], correctAnswer: "Air pressure" },
        ],
      },
      Hard: {
        description: "A stronger test of science knowledge.",
        questions: [
          { id: "sci-h-1", question: "What is the SI unit of force?", answers: ["Joule", "Pascal", "Newton", "Watt"], correctAnswer: "Newton" },
          { id: "sci-h-2", question: "Which particle has a negative electric charge?", answers: ["Proton", "Electron", "Neutron", "Photon"], correctAnswer: "Electron" },
          { id: "sci-h-3", question: "Which scientist proposed the three laws of motion?", answers: ["Einstein", "Newton", "Galileo", "Faraday"], correctAnswer: "Newton" },
          { id: "sci-h-4", question: "Which organelle is known as the powerhouse of the cell?", answers: ["Golgi body", "Mitochondrion", "Ribosome", "Chloroplast"], correctAnswer: "Mitochondrion" },
          { id: "sci-h-5", question: "What pH value is considered neutral?", answers: ["5", "6", "7", "8"], correctAnswer: "7" },
          { id: "sci-h-6", question: "Which vitamin is produced in skin exposed to sunlight?", answers: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"], correctAnswer: "Vitamin D" },
          { id: "sci-h-7", question: "What is the speed of light closest to?", answers: ["30,000 km/s", "300,000 km/s", "3,000 km/s", "3,000,000 km/s"], correctAnswer: "300,000 km/s" },
          { id: "sci-h-8", question: "Which gas is most abundant in Earth's atmosphere?", answers: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"], correctAnswer: "Nitrogen" },
          { id: "sci-h-9", question: "What is the name of the process by which rocks are broken down over time?", answers: ["Fusion", "Weathering", "Filtration", "Crystallization"], correctAnswer: "Weathering" },
          { id: "sci-h-10", question: "Which scientist discovered penicillin?", answers: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Gregor Mendel"], correctAnswer: "Alexander Fleming" },
          { id: "sci-h-11", question: "What part of the human eye controls how much light enters?", answers: ["Retina", "Cornea", "Iris", "Lens"], correctAnswer: "Iris" },
          { id: "sci-h-12", question: "What is the common name for sodium chloride?", answers: ["Baking soda", "Table salt", "Chalk", "Sugar"], correctAnswer: "Table salt" },
        ],
      },
      Advanced: {
        description: "For players who want the toughest science round.",
        questions: [
          { id: "sci-a-1", question: "What is the approximate age of the universe?", answers: ["4.5 billion years", "8 billion years", "13.8 billion years", "20 billion years"], correctAnswer: "13.8 billion years" },
          { id: "sci-a-2", question: "Which law states that entropy in an isolated system tends to increase?", answers: ["Boyle's Law", "Second Law of Thermodynamics", "Hooke's Law", "Ohm's Law"], correctAnswer: "Second Law of Thermodynamics" },
          { id: "sci-a-3", question: "What is the chemical formula for sulfuric acid?", answers: ["HCl", "HNO3", "H2SO4", "NaOH"], correctAnswer: "H2SO4" },
          { id: "sci-a-4", question: "Which part of the brain is primarily responsible for balance and coordination?", answers: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"], correctAnswer: "Cerebellum" },
          { id: "sci-a-5", question: "What is the powerhouse molecule that stores immediate energy in cells?", answers: ["DNA", "ATP", "RNA", "NADH"], correctAnswer: "ATP" },
          { id: "sci-a-6", question: "What is the most abundant element in the universe?", answers: ["Oxygen", "Helium", "Hydrogen", "Carbon"], correctAnswer: "Hydrogen" },
          { id: "sci-a-7", question: "Which organ produces insulin?", answers: ["Liver", "Pancreas", "Spleen", "Thyroid"], correctAnswer: "Pancreas" },
          { id: "sci-a-8", question: "Which phenomenon explains the bending of light when it passes between materials?", answers: ["Reflection", "Refraction", "Diffusion", "Conduction"], correctAnswer: "Refraction" },
          { id: "sci-a-9", question: "What is the branch of biology that studies fungi?", answers: ["Botany", "Mycology", "Zoology", "Genetics"], correctAnswer: "Mycology" },
          { id: "sci-a-10", question: "What kind of bond involves sharing electron pairs?", answers: ["Ionic", "Metallic", "Covalent", "Hydrogen"], correctAnswer: "Covalent" },
          { id: "sci-a-11", question: "Which subatomic particle determines the atomic number of an element?", answers: ["Electron", "Neutron", "Proton", "Photon"], correctAnswer: "Proton" },
          { id: "sci-a-12", question: "What does DNA stand for?", answers: ["Dynamic Nucleic Acid", "Deoxyribonucleic Acid", "Dual Nitrogen Array", "Deoxyribose Nuclear Atom"], correctAnswer: "Deoxyribonucleic Acid" },
        ],
      },
    },
  },
  Math: {
    description: "Pick a difficulty from easy arithmetic to advanced problem solving.",
    subcategories: {
      Easy: {
        description: "Quick wins and clean arithmetic.",
        questions: [
          { id: "math-e-1", question: "What is 7 + 8?", answers: ["13", "14", "15", "16"], correctAnswer: "15" },
          { id: "math-e-2", question: "What is 9 x 3?", answers: ["18", "21", "27", "36"], correctAnswer: "27" },
          { id: "math-e-3", question: "What is 25 - 9?", answers: ["14", "15", "16", "17"], correctAnswer: "16" },
          { id: "math-e-4", question: "How many sides does a hexagon have?", answers: ["5", "6", "7", "8"], correctAnswer: "6" },
          { id: "math-e-5", question: "What is half of 40?", answers: ["10", "15", "20", "25"], correctAnswer: "20" },
          { id: "math-e-6", question: "What is the square root of 81?", answers: ["7", "8", "9", "10"], correctAnswer: "9" },
          { id: "math-e-7", question: "What is 100 divided by 10?", answers: ["5", "8", "10", "20"], correctAnswer: "10" },
          { id: "math-e-8", question: "What is 12 x 8?", answers: ["88", "92", "96", "108"], correctAnswer: "96" },
          { id: "math-e-9", question: "What is 15% of 200?", answers: ["20", "25", "30", "35"], correctAnswer: "30" },
          { id: "math-e-10", question: "Which number is even?", answers: ["11", "13", "16", "19"], correctAnswer: "16" },
          { id: "math-e-11", question: "What is 50 + 25?", answers: ["70", "75", "80", "85"], correctAnswer: "75" },
          { id: "math-e-12", question: "What is 6 squared?", answers: ["12", "18", "24", "36"], correctAnswer: "36" },
        ],
      },
      Medium: {
        description: "Fractions, decimals, and everyday equations.",
        questions: [
          { id: "math-m-1", question: "What is 7/8 written as a decimal?", answers: ["0.75", "0.8", "0.875", "0.95"], correctAnswer: "0.875" },
          { id: "math-m-2", question: "If x + 12 = 20, what is x?", answers: ["6", "7", "8", "9"], correctAnswer: "8" },
          { id: "math-m-3", question: "What is 1001 minus 457?", answers: ["534", "544", "554", "564"], correctAnswer: "544" },
          { id: "math-m-4", question: "What is the value of pi rounded to two decimal places?", answers: ["3.12", "3.14", "3.16", "3.18"], correctAnswer: "3.14" },
          { id: "math-m-5", question: "Which number is prime?", answers: ["21", "27", "29", "33"], correctAnswer: "29" },
          { id: "math-m-6", question: "If a triangle has angles of 50 and 60 degrees, what is the third angle?", answers: ["60", "70", "80", "90"], correctAnswer: "70" },
          { id: "math-m-7", question: "What is 18% of 50?", answers: ["7", "8", "9", "10"], correctAnswer: "9" },
          { id: "math-m-8", question: "What is the perimeter of a square with side length 6?", answers: ["12", "18", "24", "36"], correctAnswer: "24" },
          { id: "math-m-9", question: "What is 3/4 of 48?", answers: ["24", "30", "32", "36"], correctAnswer: "36" },
          { id: "math-m-10", question: "Solve: 5x = 45.", answers: ["7", "8", "9", "10"], correctAnswer: "9" },
          { id: "math-m-11", question: "What is the median of 2, 7, 9?", answers: ["2", "7", "8", "9"], correctAnswer: "7" },
          { id: "math-m-12", question: "How many degrees are in a right angle?", answers: ["45", "60", "90", "180"], correctAnswer: "90" },
        ],
      },
      Hard: {
        description: "Algebra, exponents, and tougher reasoning.",
        questions: [
          { id: "math-h-1", question: "What is 2^5?", answers: ["16", "24", "32", "64"], correctAnswer: "32" },
          { id: "math-h-2", question: "If 3x - 4 = 11, what is x?", answers: ["3", "4", "5", "6"], correctAnswer: "5" },
          { id: "math-h-3", question: "What is the area of a triangle with base 10 and height 6?", answers: ["16", "30", "60", "120"], correctAnswer: "30" },
          { id: "math-h-4", question: "What is the least common multiple of 6 and 8?", answers: ["12", "18", "24", "48"], correctAnswer: "24" },
          { id: "math-h-5", question: "What is 144 divided by 12?", answers: ["10", "11", "12", "14"], correctAnswer: "12" },
          { id: "math-h-6", question: "Simplify: 4(3 + 2).", answers: ["9", "14", "18", "20"], correctAnswer: "20" },
          { id: "math-h-7", question: "What is 11 squared?", answers: ["111", "121", "131", "141"], correctAnswer: "121" },
          { id: "math-h-8", question: "What is the slope of a line rising 8 units over a run of 2?", answers: ["2", "3", "4", "6"], correctAnswer: "4" },
          { id: "math-h-9", question: "Which is greater?", answers: ["2/3", "3/5", "They are equal", "Not enough information"], correctAnswer: "2/3" },
          { id: "math-h-10", question: "What is the next prime number after 31?", answers: ["33", "35", "37", "39"], correctAnswer: "37" },
          { id: "math-h-11", question: "What is 0.4 as a fraction in simplest form?", answers: ["1/4", "2/5", "3/5", "4/5"], correctAnswer: "2/5" },
          { id: "math-h-12", question: "If the diameter of a circle is 10, what is the radius?", answers: ["2", "5", "10", "20"], correctAnswer: "5" },
        ],
      },
      Advanced: {
        description: "For players who want the toughest math pool.",
        questions: [
          { id: "math-a-1", question: "What is the derivative of x^2?", answers: ["x", "2x", "x^2", "2"], correctAnswer: "2x" },
          { id: "math-a-2", question: "What is the value of 3! ?", answers: ["3", "6", "9", "12"], correctAnswer: "6" },
          { id: "math-a-3", question: "What is the sum of the interior angles of a pentagon?", answers: ["360", "450", "540", "720"], correctAnswer: "540" },
          { id: "math-a-4", question: "What is the solution to x^2 = 49?", answers: ["7 only", "-7 only", "7 and -7", "0 and 7"], correctAnswer: "7 and -7" },
          { id: "math-a-5", question: "What is log10(100)?", answers: ["1", "2", "10", "100"], correctAnswer: "2" },
          { id: "math-a-6", question: "What is the value of 2/5 + 1/10?", answers: ["1/2", "3/5", "2/3", "4/5"], correctAnswer: "1/2" },
          { id: "math-a-7", question: "What is the probability of flipping heads on a fair coin once?", answers: ["1/4", "1/3", "1/2", "2/3"], correctAnswer: "1/2" },
          { id: "math-a-8", question: "Which number is irrational?", answers: ["1/2", "0.75", "sqrt(2)", "4"], correctAnswer: "sqrt(2)" },
          { id: "math-a-9", question: "If f(x) = x + 4, what is f(6)?", answers: ["8", "9", "10", "12"], correctAnswer: "10" },
          { id: "math-a-10", question: "What is the quadratic formula used to solve?", answers: ["Linear equations", "Quadratic equations", "Fractions", "Matrices"], correctAnswer: "Quadratic equations" },
          { id: "math-a-11", question: "What is 3^4?", answers: ["27", "64", "81", "243"], correctAnswer: "81" },
          { id: "math-a-12", question: "Which coordinate comes first in an ordered pair?", answers: ["y-coordinate", "z-coordinate", "x-coordinate", "radius"], correctAnswer: "x-coordinate" },
        ],
      },
    },
  },
  History: {
    description: "Timelines, empires, and turning points.",
    subcategories: {
      Mixed: {
        description: "A broad mix of famous history questions.",
        questions: [
          { id: "hist-1", question: "Who was the first President of the United States?", answers: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"], correctAnswer: "George Washington" },
          { id: "hist-2", question: "In which year did World War II end?", answers: ["1943", "1945", "1948", "1950"], correctAnswer: "1945" },
          { id: "hist-3", question: "Which ancient civilization built Machu Picchu?", answers: ["Maya", "Roman", "Inca", "Aztec"], correctAnswer: "Inca" },
          { id: "hist-4", question: "The Berlin Wall fell in which year?", answers: ["1987", "1989", "1991", "1993"], correctAnswer: "1989" },
          { id: "hist-5", question: "Which ship sank on its maiden voyage in 1912?", answers: ["Britannic", "Lusitania", "Titanic", "Bismarck"], correctAnswer: "Titanic" },
          { id: "hist-6", question: "Who was known as the Maid of Orleans?", answers: ["Cleopatra", "Joan of Arc", "Queen Victoria", "Catherine the Great"], correctAnswer: "Joan of Arc" },
          { id: "hist-7", question: "What was the name of the trade route linking China with the Mediterranean?", answers: ["Amber Road", "Spice Path", "Silk Road", "Royal Way"], correctAnswer: "Silk Road" },
          { id: "hist-8", question: "Which country was the first to give women the right to vote nationwide?", answers: ["United Kingdom", "New Zealand", "United States", "Canada"], correctAnswer: "New Zealand" },
          { id: "hist-9", question: "Which empire was ruled by Julius Caesar?", answers: ["Ottoman Empire", "Roman Republic", "British Empire", "Mongol Empire"], correctAnswer: "Roman Republic" },
          { id: "hist-10", question: "Who discovered penicillin?", answers: ["Alexander Fleming", "Isaac Newton", "Louis Pasteur", "Marie Curie"], correctAnswer: "Alexander Fleming" },
          { id: "hist-11", question: "Which document begins with 'We the People'?", answers: ["Magna Carta", "U.S. Constitution", "Bill of Rights", "Declaration of Independence"], correctAnswer: "U.S. Constitution" },
          { id: "hist-12", question: "Which ancient civilization built the pyramids at Giza?", answers: ["Greek", "Roman", "Egyptian", "Persian"], correctAnswer: "Egyptian" },
        ],
      },
    },
  },
  Entertainment: {
    description: "Movies, music, and pop culture.",
    subcategories: {
      Mixed: {
        description: "A broad entertainment mix.",
        questions: [
          { id: "ent-1", question: "Which movie features the quote, 'I'll be back'?", answers: ["Predator", "The Terminator", "RoboCop", "Die Hard"], correctAnswer: "The Terminator" },
          { id: "ent-2", question: "Who sang the hit song 'Rolling in the Deep'?", answers: ["Adele", "Beyonce", "Taylor Swift", "Sia"], correctAnswer: "Adele" },
          { id: "ent-3", question: "What is the name of the fictional African country in Black Panther?", answers: ["Genosha", "Wakanda", "Zamunda", "Latveria"], correctAnswer: "Wakanda" },
          { id: "ent-4", question: "Which streaming series features Wednesday Addams at Nevermore Academy?", answers: ["Stranger Things", "Wednesday", "Riverdale", "The Chilling Adventures of Sabrina"], correctAnswer: "Wednesday" },
          { id: "ent-5", question: "Who directed the movie Inception?", answers: ["Denis Villeneuve", "Christopher Nolan", "Steven Spielberg", "James Cameron"], correctAnswer: "Christopher Nolan" },
          { id: "ent-6", question: "Which artist is known as the King of Pop?", answers: ["Prince", "Elvis Presley", "Michael Jackson", "Bruno Mars"], correctAnswer: "Michael Jackson" },
          { id: "ent-7", question: "What is the highest-grossing film of James Cameron's career?", answers: ["Titanic", "Avatar", "Aliens", "The Abyss"], correctAnswer: "Avatar" },
          { id: "ent-8", question: "Which instrument does Lizzo famously play on stage?", answers: ["Violin", "Flute", "Cello", "Trumpet"], correctAnswer: "Flute" },
          { id: "ent-9", question: "Which animated film centers on the Madrigal family?", answers: ["Coco", "Moana", "Encanto", "Frozen"], correctAnswer: "Encanto" },
          { id: "ent-10", question: "Which band recorded 'Bohemian Rhapsody'?", answers: ["Queen", "The Beatles", "Led Zeppelin", "The Rolling Stones"], correctAnswer: "Queen" },
          { id: "ent-11", question: "Which actor played Jack in Titanic?", answers: ["Brad Pitt", "Matt Damon", "Leonardo DiCaprio", "Tom Cruise"], correctAnswer: "Leonardo DiCaprio" },
          { id: "ent-12", question: "Which franchise features a Jedi and a Sith?", answers: ["Star Trek", "Star Wars", "Dune", "Avatar"], correctAnswer: "Star Wars" },
        ],
      },
    },
  },
  Technology: {
    description: "Computing basics and modern tech.",
    subcategories: {
      Mixed: {
        description: "A broad technology mix.",
        questions: [
          { id: "tech-1", question: "What does HTML stand for?", answers: ["HyperText Markdown Language", "HyperText Markup Language", "Home Tool Markup Language", "Hyperlink and Text Management Language"], correctAnswer: "HyperText Markup Language" },
          { id: "tech-2", question: "Which company created the iPhone?", answers: ["Apple", "Samsung", "Google", "Nokia"], correctAnswer: "Apple" },
          { id: "tech-3", question: "What does CPU stand for?", answers: ["Central Process Unit", "Central Processing Unit", "Computer Primary Unit", "Central Program Utility"], correctAnswer: "Central Processing Unit" },
          { id: "tech-4", question: "Which protocol is commonly used to load web pages securely?", answers: ["FTP", "SMTP", "HTTPS", "SSH"], correctAnswer: "HTTPS" },
          { id: "tech-5", question: "Which language runs natively in web browsers?", answers: ["Python", "C#", "Java", "JavaScript"], correctAnswer: "JavaScript" },
          { id: "tech-6", question: "Which storage is usually faster?", answers: ["HDD", "SSD", "Tape Drive", "DVD"], correctAnswer: "SSD" },
          { id: "tech-7", question: "What is the binary value of decimal 2?", answers: ["10", "11", "01", "100"], correctAnswer: "10" },
          { id: "tech-8", question: "Which company develops the Windows operating system?", answers: ["Intel", "Microsoft", "Adobe", "Oracle"], correctAnswer: "Microsoft" },
          { id: "tech-9", question: "What does Wi-Fi primarily provide?", answers: ["Wireless internet networking", "Battery charging", "File compression", "Screen brightness"], correctAnswer: "Wireless internet networking" },
          { id: "tech-10", question: "Which key do you often press to create a new line?", answers: ["Shift", "Delete", "Enter", "Escape"], correctAnswer: "Enter" },
          { id: "tech-11", question: "What is a browser used for?", answers: ["Cooking", "Viewing websites", "Charging a laptop", "Editing photos only"], correctAnswer: "Viewing websites" },
          { id: "tech-12", question: "Which device is primarily used to move the cursor on many desktop computers?", answers: ["Printer", "Mouse", "Speaker", "Router"], correctAnswer: "Mouse" },
        ],
      },
    },
  },
  Sports: {
    description: "Big games, famous rules, and iconic leagues.",
    subcategories: {
      Mixed: {
        description: "A mix of global sports questions.",
        questions: [
          { id: "sports-1", question: "How many players from one team are on the court in basketball at a time?", answers: ["4", "5", "6", "7"], correctAnswer: "5" },
          { id: "sports-2", question: "Which country won the FIFA World Cup in 2022?", answers: ["France", "Brazil", "Argentina", "Germany"], correctAnswer: "Argentina" },
          { id: "sports-3", question: "In tennis, what is the term for a score of zero?", answers: ["Blank", "Love", "Nil", "Ace"], correctAnswer: "Love" },
          { id: "sports-4", question: "Which sport uses a pommel horse?", answers: ["Polo", "Gymnastics", "Rugby", "Fencing"], correctAnswer: "Gymnastics" },
          { id: "sports-5", question: "How many points is a touchdown worth in American football?", answers: ["3", "5", "6", "7"], correctAnswer: "6" },
          { id: "sports-6", question: "Which country is strongly associated with cricket's IPL?", answers: ["Australia", "England", "India", "South Africa"], correctAnswer: "India" },
          { id: "sports-7", question: "What color card means a player is sent off in soccer?", answers: ["Yellow", "Blue", "Green", "Red"], correctAnswer: "Red" },
          { id: "sports-8", question: "In baseball, how many strikes make an out?", answers: ["2", "3", "4", "5"], correctAnswer: "3" },
          { id: "sports-9", question: "Which race is known as 'The Fastest Two Minutes in Sports'?", answers: ["Daytona 500", "Kentucky Derby", "Tour de France", "Indy 500"], correctAnswer: "Kentucky Derby" },
          { id: "sports-10", question: "Which sport features the terms birdie, eagle, and bogey?", answers: ["Badminton", "Golf", "Archery", "Hockey"], correctAnswer: "Golf" },
          { id: "sports-11", question: "How many rings are on the Olympic flag?", answers: ["4", "5", "6", "7"], correctAnswer: "5" },
          { id: "sports-12", question: "Which sport is Michael Phelps famous for?", answers: ["Running", "Swimming", "Cycling", "Rowing"], correctAnswer: "Swimming" },
        ],
      },
    },
  },
  Literature: {
    description: "Books, authors, and classic stories.",
    subcategories: {
      Mixed: {
        description: "A broad reading-themed round.",
        questions: [
          { id: "lit-1", question: "Who wrote 'Romeo and Juliet'?", answers: ["Jane Austen", "William Shakespeare", "Charles Dickens", "Mark Twain"], correctAnswer: "William Shakespeare" },
          { id: "lit-2", question: "Which wizarding school appears in the Harry Potter series?", answers: ["Narnia Academy", "Hogwarts", "Camp Half-Blood", "Nevermore"], correctAnswer: "Hogwarts" },
          { id: "lit-3", question: "Who wrote 'Pride and Prejudice'?", answers: ["Emily Bronte", "Jane Austen", "Virginia Woolf", "Louisa May Alcott"], correctAnswer: "Jane Austen" },
          { id: "lit-4", question: "What kind of animal is Aslan in 'The Chronicles of Narnia'?", answers: ["Wolf", "Lion", "Tiger", "Horse"], correctAnswer: "Lion" },
          { id: "lit-5", question: "Who wrote '1984'?", answers: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"], correctAnswer: "George Orwell" },
          { id: "lit-6", question: "Which book begins with the line 'Call me Ishmael'?", answers: ["Treasure Island", "Moby-Dick", "The Odyssey", "The Old Man and the Sea"], correctAnswer: "Moby-Dick" },
          { id: "lit-7", question: "Who created Sherlock Holmes?", answers: ["Agatha Christie", "Arthur Conan Doyle", "Edgar Allan Poe", "Jules Verne"], correctAnswer: "Arthur Conan Doyle" },
          { id: "lit-8", question: "What is the surname of the sisters in 'Little Women'?", answers: ["March", "Dashwood", "Bennet", "Earnshaw"], correctAnswer: "March" },
          { id: "lit-9", question: "Which author wrote 'The Hobbit'?", answers: ["C.S. Lewis", "J.K. Rowling", "J.R.R. Tolkien", "Terry Pratchett"], correctAnswer: "J.R.R. Tolkien" },
          { id: "lit-10", question: "Who wrote 'The Raven'?", answers: ["Robert Frost", "Edgar Allan Poe", "Walt Whitman", "T.S. Eliot"], correctAnswer: "Edgar Allan Poe" },
          { id: "lit-11", question: "What is the name of the pig in 'Charlotte's Web'?", answers: ["Babe", "Wilbur", "Templeton", "Fern"], correctAnswer: "Wilbur" },
          { id: "lit-12", question: "Which dystopian series features Katniss Everdeen?", answers: ["Divergent", "The Maze Runner", "The Hunger Games", "Matched"], correctAnswer: "The Hunger Games" },
        ],
      },
    },
  },
  Nature: {
    description: "Animals, ecosystems, and the natural world.",
    subcategories: {
      Mixed: {
        description: "A wild mix of earth and life questions.",
        questions: [
          { id: "nature-1", question: "What is the largest mammal on Earth?", answers: ["African elephant", "Blue whale", "Giraffe", "Hippopotamus"], correctAnswer: "Blue whale" },
          { id: "nature-2", question: "Which bird is known for mimicking human speech?", answers: ["Crow", "Eagle", "Parrot", "Penguin"], correctAnswer: "Parrot" },
          { id: "nature-3", question: "What is the tallest type of grass?", answers: ["Sugarcane", "Bamboo", "Wheat", "Reed"], correctAnswer: "Bamboo" },
          { id: "nature-4", question: "Which animal is known as the king of the jungle?", answers: ["Tiger", "Lion", "Bear", "Leopard"], correctAnswer: "Lion" },
          { id: "nature-5", question: "What do caterpillars become?", answers: ["Beetles", "Dragonflies", "Butterflies", "Moths only"], correctAnswer: "Butterflies" },
          { id: "nature-6", question: "Which ocean animal has eight arms?", answers: ["Squid", "Octopus", "Starfish", "Seal"], correctAnswer: "Octopus" },
          { id: "nature-7", question: "What is the process by which plants lose water vapor?", answers: ["Respiration", "Transpiration", "Condensation", "Fermentation"], correctAnswer: "Transpiration" },
          { id: "nature-8", question: "Which layer of the Earth is beneath the crust?", answers: ["Core", "Mantle", "Outer shell", "Atmosphere"], correctAnswer: "Mantle" },
          { id: "nature-9", question: "What kind of tree produces acorns?", answers: ["Pine", "Maple", "Oak", "Birch"], correctAnswer: "Oak" },
          { id: "nature-10", question: "Which animal is famous for changing color to blend in?", answers: ["Otter", "Chameleon", "Falcon", "Rabbit"], correctAnswer: "Chameleon" },
          { id: "nature-11", question: "What do we call animals active at night?", answers: ["Aquatic", "Herbivorous", "Nocturnal", "Migratory"], correctAnswer: "Nocturnal" },
          { id: "nature-12", question: "Which natural disaster is measured on the Richter scale?", answers: ["Tornado", "Flood", "Earthquake", "Wildfire"], correctAnswer: "Earthquake" },
        ],
      },
    },
  },
  "Food & Drink": {
    description: "Ingredients, dishes, and world flavors.",
    subcategories: {
      Mixed: {
        description: "A tasty mix of food trivia.",
        questions: [
          { id: "food-1", question: "Which fruit is dried to make raisins?", answers: ["Apple", "Grape", "Plum", "Cherry"], correctAnswer: "Grape" },
          { id: "food-2", question: "What main ingredient is used to make guacamole?", answers: ["Cucumber", "Avocado", "Spinach", "Pea"], correctAnswer: "Avocado" },
          { id: "food-3", question: "Which drink is made from ground roasted beans?", answers: ["Tea", "Coffee", "Cocoa", "Soda"], correctAnswer: "Coffee" },
          { id: "food-4", question: "Sushi commonly includes which staple ingredient?", answers: ["Potato", "Rice", "Bread", "Cheese"], correctAnswer: "Rice" },
          { id: "food-5", question: "What type of pastry is used for profiteroles?", answers: ["Puff pastry", "Shortcrust", "Choux pastry", "Filo"], correctAnswer: "Choux pastry" },
          { id: "food-6", question: "Which country is most associated with tacos?", answers: ["Spain", "Mexico", "Italy", "Peru"], correctAnswer: "Mexico" },
          { id: "food-7", question: "What do Italians call a coffee with milk foam?", answers: ["Espresso", "Latte", "Americano", "Mocha"], correctAnswer: "Latte" },
          { id: "food-8", question: "Which vitamin is especially associated with oranges?", answers: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"], correctAnswer: "Vitamin C" },
          { id: "food-9", question: "What is tofu typically made from?", answers: ["Soybeans", "Chickpeas", "Potatoes", "Rice"], correctAnswer: "Soybeans" },
          { id: "food-10", question: "Which spice is often considered the most expensive by weight?", answers: ["Cinnamon", "Pepper", "Saffron", "Paprika"], correctAnswer: "Saffron" },
          { id: "food-11", question: "What is the main ingredient in hummus?", answers: ["Lentils", "Chickpeas", "Black beans", "Peanuts"], correctAnswer: "Chickpeas" },
          { id: "food-12", question: "Which meal is usually eaten in the evening?", answers: ["Breakfast", "Brunch", "Lunch", "Dinner"], correctAnswer: "Dinner" },
        ],
      },
    },
  },
  Movies: {
    description: "Blockbusters, quotes, and famous characters.",
    subcategories: {
      Mixed: {
        description: "A broad movie night mix.",
        questions: [
          { id: "movies-1", question: "Which movie features a theme park full of cloned dinosaurs?", answers: ["Jaws", "Jurassic Park", "King Kong", "Godzilla"], correctAnswer: "Jurassic Park" },
          { id: "movies-2", question: "Who directed Titanic?", answers: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Ridley Scott"], correctAnswer: "James Cameron" },
          { id: "movies-3", question: "Which film series features the character Ethan Hunt?", answers: ["Bourne", "Mission: Impossible", "John Wick", "Die Hard"], correctAnswer: "Mission: Impossible" },
          { id: "movies-4", question: "Which movie has the line 'Life is like a box of chocolates'?", answers: ["Cast Away", "Forrest Gump", "Big", "Rain Man"], correctAnswer: "Forrest Gump" },
          { id: "movies-5", question: "What color pill does Neo take in The Matrix?", answers: ["Blue", "Red", "Green", "White"], correctAnswer: "Red" },
          { id: "movies-6", question: "Which animated movie features Lightning McQueen?", answers: ["Turbo", "Cars", "Planes", "Toy Story"], correctAnswer: "Cars" },
          { id: "movies-7", question: "Which actor played Iron Man in the MCU?", answers: ["Chris Evans", "Robert Downey Jr.", "Mark Ruffalo", "Jeremy Renner"], correctAnswer: "Robert Downey Jr." },
          { id: "movies-8", question: "What is the fictional African nation in Black Panther?", answers: ["Wakanda", "Genovia", "Zamunda", "Latveria"], correctAnswer: "Wakanda" },
          { id: "movies-9", question: "Which movie begins with a dream-sharing heist?", answers: ["Interstellar", "Tenet", "Inception", "Memento"], correctAnswer: "Inception" },
          { id: "movies-10", question: "Which film is about a clownfish searching for his son?", answers: ["Shark Tale", "Finding Nemo", "Moana", "Luca"], correctAnswer: "Finding Nemo" },
          { id: "movies-11", question: "Which actor played Jack Sparrow?", answers: ["Johnny Depp", "Orlando Bloom", "Hugh Jackman", "Tom Hanks"], correctAnswer: "Johnny Depp" },
          { id: "movies-12", question: "Which movie franchise features lightsabers?", answers: ["Star Trek", "Star Wars", "Dune", "Avatar"], correctAnswer: "Star Wars" },
        ],
      },
    },
  },
  Music: {
    description: "Songs, artists, and chart legends.",
    subcategories: {
      Mixed: {
        description: "A broad music trivia mix.",
        questions: [
          { id: "music-1", question: "Which artist is known as the King of Pop?", answers: ["Prince", "Elton John", "Michael Jackson", "Bruno Mars"], correctAnswer: "Michael Jackson" },
          { id: "music-2", question: "Which band recorded 'Bohemian Rhapsody'?", answers: ["Queen", "ABBA", "The Beatles", "Coldplay"], correctAnswer: "Queen" },
          { id: "music-3", question: "How many strings does a standard guitar usually have?", answers: ["4", "5", "6", "7"], correctAnswer: "6" },
          { id: "music-4", question: "Who sang 'Rolling in the Deep'?", answers: ["Adele", "Sia", "Rihanna", "Beyonce"], correctAnswer: "Adele" },
          { id: "music-5", question: "Which instrument has black and white keys?", answers: ["Violin", "Piano", "Trumpet", "Drums"], correctAnswer: "Piano" },
          { id: "music-6", question: "Which artist released the album 1989?", answers: ["Taylor Swift", "Billie Eilish", "Lady Gaga", "Katy Perry"], correctAnswer: "Taylor Swift" },
          { id: "music-7", question: "Which music term means very loud?", answers: ["Piano", "Forte", "Legato", "Tempo"], correctAnswer: "Forte" },
          { id: "music-8", question: "What family of instruments does the trumpet belong to?", answers: ["Woodwind", "String", "Brass", "Percussion"], correctAnswer: "Brass" },
          { id: "music-9", question: "Which artist is famous for the song 'Bad Guy'?", answers: ["Dua Lipa", "Billie Eilish", "Lorde", "Olivia Rodrigo"], correctAnswer: "Billie Eilish" },
          { id: "music-10", question: "Which member of The Beatles was nicknamed the Quiet Beatle?", answers: ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"], correctAnswer: "George Harrison" },
          { id: "music-11", question: "What do we call the speed of a song?", answers: ["Pitch", "Tempo", "Scale", "Note"], correctAnswer: "Tempo" },
          { id: "music-12", question: "Which singer is known for 'Shape of You'?", answers: ["Ed Sheeran", "Shawn Mendes", "Harry Styles", "Justin Bieber"], correctAnswer: "Ed Sheeran" },
        ],
      },
    },
  },
  Art: {
    description: "Paintings, artists, and visual culture.",
    subcategories: {
      Mixed: {
        description: "A gallery-style art round.",
        questions: [
          { id: "art-1", question: "Who painted the Mona Lisa?", answers: ["Vincent van Gogh", "Leonardo da Vinci", "Claude Monet", "Pablo Picasso"], correctAnswer: "Leonardo da Vinci" },
          { id: "art-2", question: "Which artist cut off part of his ear?", answers: ["Salvador Dali", "Vincent van Gogh", "Henri Matisse", "Rembrandt"], correctAnswer: "Vincent van Gogh" },
          { id: "art-3", question: "The Starry Night was painted by which artist?", answers: ["Monet", "Picasso", "van Gogh", "Munch"], correctAnswer: "van Gogh" },
          { id: "art-4", question: "Which museum is home to the Mona Lisa?", answers: ["The Met", "The Louvre", "Uffizi Gallery", "Tate Modern"], correctAnswer: "The Louvre" },
          { id: "art-5", question: "What do we call a painting of a person?", answers: ["Landscape", "Portrait", "Still life", "Mural"], correctAnswer: "Portrait" },
          { id: "art-6", question: "Which artist is known for melting clocks?", answers: ["Picasso", "Dali", "Warhol", "Cezanne"], correctAnswer: "Dali" },
          { id: "art-7", question: "What primary colors can be mixed to make purple?", answers: ["Red and blue", "Blue and yellow", "Red and yellow", "Yellow and green"], correctAnswer: "Red and blue" },
          { id: "art-8", question: "Which pop artist created colorful Campbell's Soup can works?", answers: ["Basquiat", "Warhol", "Pollock", "Rothko"], correctAnswer: "Warhol" },
          { id: "art-9", question: "What is a sculpture typically made to be?", answers: ["Touched only in books", "Three-dimensional", "Always painted", "Flat"], correctAnswer: "Three-dimensional" },
          { id: "art-10", question: "Which artist co-founded Cubism?", answers: ["Picasso", "Monet", "Matisse", "Klimt"], correctAnswer: "Picasso" },
          { id: "art-11", question: "What is a painting of fruit and objects called?", answers: ["Still life", "Abstract", "Portrait", "Panorama"], correctAnswer: "Still life" },
          { id: "art-12", question: "Which medium uses water-soluble pigments on paper?", answers: ["Oil", "Charcoal", "Watercolor", "Pastel"], correctAnswer: "Watercolor" },
        ],
      },
    },
  },
  Space: {
    description: "Planets, stars, and cosmic facts.",
    subcategories: {
      Mixed: {
        description: "A stellar set of space trivia.",
        questions: [
          { id: "space-1", question: "Which planet is known as the Red Planet?", answers: ["Mars", "Venus", "Mercury", "Jupiter"], correctAnswer: "Mars" },
          { id: "space-2", question: "What is the name of our galaxy?", answers: ["Andromeda", "Milky Way", "Orion", "Pegasus"], correctAnswer: "Milky Way" },
          { id: "space-3", question: "Which planet is famous for its rings?", answers: ["Neptune", "Saturn", "Earth", "Mars"], correctAnswer: "Saturn" },
          { id: "space-4", question: "What is the Sun?", answers: ["A planet", "A comet", "A star", "A moon"], correctAnswer: "A star" },
          { id: "space-5", question: "Who was the first human to walk on the Moon?", answers: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"], correctAnswer: "Neil Armstrong" },
          { id: "space-6", question: "What force keeps planets in orbit?", answers: ["Magnetism", "Friction", "Gravity", "Pressure"], correctAnswer: "Gravity" },
          { id: "space-7", question: "Which planet is closest to the Sun?", answers: ["Mercury", "Venus", "Earth", "Mars"], correctAnswer: "Mercury" },
          { id: "space-8", question: "What do astronauts wear in space?", answers: ["Armor", "Spacesuits", "Raincoats", "Flight jackets"], correctAnswer: "Spacesuits" },
          { id: "space-9", question: "Which telescope is famous for orbiting Earth and taking deep space images?", answers: ["Kepler", "Hubble", "Voyager", "Sputnik"], correctAnswer: "Hubble" },
          { id: "space-10", question: "How many planets are in our solar system?", answers: ["7", "8", "9", "10"], correctAnswer: "8" },
          { id: "space-11", question: "What is a shooting star actually called?", answers: ["Meteor", "Asteroid", "Nebula", "Galaxy"], correctAnswer: "Meteor" },
          { id: "space-12", question: "Which planet is largest in our solar system?", answers: ["Saturn", "Earth", "Jupiter", "Uranus"], correctAnswer: "Jupiter" },
        ],
      },
    },
  },
  Mythology: {
    description: "Gods, heroes, and legendary creatures.",
    subcategories: {
      Mixed: {
        description: "A mixed mythology challenge.",
        questions: [
          { id: "myth-1", question: "In Greek mythology, who is the king of the gods?", answers: ["Ares", "Apollo", "Zeus", "Hermes"], correctAnswer: "Zeus" },
          { id: "myth-2", question: "Thor is associated with which weapon?", answers: ["Sword", "Hammer", "Bow", "Trident"], correctAnswer: "Hammer" },
          { id: "myth-3", question: "What mythical creature is part lion and part eagle?", answers: ["Griffin", "Phoenix", "Centaur", "Hydra"], correctAnswer: "Griffin" },
          { id: "myth-4", question: "Who is the Greek goddess of wisdom?", answers: ["Hera", "Athena", "Artemis", "Demeter"], correctAnswer: "Athena" },
          { id: "myth-5", question: "In Roman mythology, who is the equivalent of Zeus?", answers: ["Mars", "Jupiter", "Neptune", "Mercury"], correctAnswer: "Jupiter" },
          { id: "myth-6", question: "What creature rises from its ashes?", answers: ["Dragon", "Phoenix", "Kraken", "Minotaur"], correctAnswer: "Phoenix" },
          { id: "myth-7", question: "Who went on twelve labors in Greek mythology?", answers: ["Perseus", "Achilles", "Hercules", "Odysseus"], correctAnswer: "Hercules" },
          { id: "myth-8", question: "What is the name of the one-eyed giant in Greek myths?", answers: ["Cyclops", "Centaur", "Satyr", "Hydra"], correctAnswer: "Cyclops" },
          { id: "myth-9", question: "In Norse mythology, what is the name of Odin's son with the hammer?", answers: ["Loki", "Balder", "Thor", "Tyr"], correctAnswer: "Thor" },
          { id: "myth-10", question: "What maze-dwelling creature had the body of a man and head of a bull?", answers: ["Sphinx", "Minotaur", "Cerberus", "Faun"], correctAnswer: "Minotaur" },
          { id: "myth-11", question: "Who is the Greek god of the sea?", answers: ["Hermes", "Poseidon", "Hephaestus", "Hades"], correctAnswer: "Poseidon" },
          { id: "myth-12", question: "What mythical horse has wings?", answers: ["Pegasus", "Sleipnir", "Unicorn", "Kelpie"], correctAnswer: "Pegasus" },
        ],
      },
    },
  },
};

const ui = {};
const state = {
  mode: "single",
  selectedTopic: "",
  selectedSubcategory: "",
  currentQuestions: [],
  currentQuestionIndex: 0,
  score: 0,
  countdown: TIME_PER_QUESTION,
  timerId: null,
  advanceTimeoutId: null,
  hasAnsweredCurrentQuestion: false,
  autoStartTimeoutId: null,
  partyPlayers: [],
  activePlayerIndex: 0,
};

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function getPoolKey(topic, subcategory) {
  return `trivia-sprint:${topic}:${subcategory}:recent`;
}

function getLastRoundKey(topic, subcategory) {
  return `trivia-sprint:${topic}:${subcategory}:last-round`;
}

function getRecentHistory(topic, subcategory) {
  try {
    const raw = window.localStorage.getItem(getPoolKey(topic, subcategory));
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveRecentHistory(topic, subcategory, questions) {
  try {
    const existing = getRecentHistory(topic, subcategory);
    const ids = questions.map((question) => question.id);
    const merged = [...new Set([...existing, ...ids])];
    window.localStorage.setItem(getPoolKey(topic, subcategory), JSON.stringify(merged.slice(-RECENT_HISTORY_LIMIT)));
  } catch {}
}

function getLastRound(topic, subcategory) {
  try {
    const raw = window.localStorage.getItem(getLastRoundKey(topic, subcategory));
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveLastRound(topic, subcategory, questions) {
  try {
    window.localStorage.setItem(getLastRoundKey(topic, subcategory), JSON.stringify(questions.map((question) => question.id)));
  } catch {}
}

function chooseQuestions(topic, subcategory) {
  const pool = triviaTopics[topic].subcategories[subcategory].questions;
  const recent = new Set(getRecentHistory(topic, subcategory));
  const lastRound = new Set(getLastRound(topic, subcategory));
  const neverSeen = shuffle(pool.filter((question) => !recent.has(question.id) && !lastRound.has(question.id)));
  const notInLastRound = shuffle(pool.filter((question) => !lastRound.has(question.id) && recent.has(question.id)));
  const seenBefore = shuffle(pool.filter((question) => lastRound.has(question.id)));
  const selected = [...neverSeen, ...notInLastRound, ...seenBefore].slice(0, QUESTIONS_PER_GAME);
  saveRecentHistory(topic, subcategory, selected);
  saveLastRound(topic, subcategory, selected);
  return selected;
}

function clearTimers() {
  window.clearInterval(state.timerId);
  window.clearTimeout(state.advanceTimeoutId);
  window.clearTimeout(state.autoStartTimeoutId);
  state.timerId = null;
  state.advanceTimeoutId = null;
  state.autoStartTimeoutId = null;
}

function showScreen(screen) {
  [ui.startScreen, ui.gameScreen, ui.resultScreen].forEach((element) => {
    element.classList.toggle("active", element === screen);
  });
}

function createAudioContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  if (!createAudioContext.instance) createAudioContext.instance = new AudioContextClass();
  return createAudioContext.instance;
}

function playToneSequence(sequence, waveform = "square", duration = 0.12) {
  const audioContext = createAudioContext();
  if (!audioContext) return;
  const start = audioContext.currentTime;
  sequence.forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const noteStart = start + index * duration;
    const noteEnd = noteStart + duration;
    oscillator.type = waveform;
    oscillator.frequency.setValueAtTime(frequency, noteStart);
    gain.gain.setValueAtTime(0.001, noteStart);
    gain.gain.exponentialRampToValueAtTime(0.055, noteStart + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, noteEnd);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(noteStart);
    oscillator.stop(noteEnd);
  });
}

function playEffect(kind) {
  if (kind === "correct") playToneSequence([523.25, 659.25, 783.99], "square", 0.09);
  if (kind === "wrong") playToneSequence([220.0, 174.61], "sawtooth", 0.14);
  if (kind === "great") playToneSequence([523.25, 659.25, 783.99, 1046.5], "triangle", 0.1);
}

function flashCard(kind) {
  ui.gameCard.classList.remove("celebrate", "shake");
  void ui.gameCard.offsetWidth;
  ui.gameCard.classList.add(kind === "correct" ? "celebrate" : "shake");
}

function setFeedback(message, kind = "") {
  ui.feedback.textContent = message;
  ui.feedback.className = "feedback";
  if (kind) {
    ui.feedback.classList.add(kind);
    flashCard(kind);
    playEffect(kind);
  }
}

function parsePartyPlayers() {
  return ui.partyPlayersInput.value
    .split(",")
    .map((name) => name.trim())
    .filter(Boolean)
    .slice(0, 12)
    .map((name) => ({ name, score: 0 }));
}

function updateModeUI() {
  ui.modeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === state.mode);
  });
  ui.partyPanel.classList.toggle("hidden", state.mode !== "party");
}

function selectMode(mode) {
  state.mode = mode;
  updateModeUI();
  if (state.selectedTopic && state.selectedSubcategory) {
    ui.selectionSummary.textContent = `${mode === "party" ? "Party Mode" : "Solo"} • ${state.selectedTopic} • ${state.selectedSubcategory}`;
  }
}

function renderTopics() {
  ui.topicList.innerHTML = "";
  Object.entries(triviaTopics).forEach(([topicName, config]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "topic-button";
    button.innerHTML = `<strong>${topicName}</strong><span>${config.description}</span>`;
    button.addEventListener("click", () => selectTopic(topicName));
    ui.topicList.appendChild(button);
  });
}

function renderSubcategories(topic) {
  ui.subcategoryList.innerHTML = "";
  Object.entries(triviaTopics[topic].subcategories).forEach(([subcategoryName, config]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "subcategory-button";
    button.innerHTML = `<strong>${subcategoryName}</strong><span>${config.description}</span>`;
    button.addEventListener("click", () => selectSubcategory(subcategoryName));
    ui.subcategoryList.appendChild(button);
  });
}

function selectTopic(topic) {
  state.selectedTopic = topic;
  state.selectedSubcategory = "";
  ui.subcategoryPanel.classList.remove("hidden");
  ui.subcategoryCopy.textContent = `${topic} has ${Object.keys(triviaTopics[topic].subcategories).length} subcategories.`;
  ui.selectionSummary.textContent = `Topic selected: ${topic}. Choose a subcategory to continue.`;
  ui.startGameButton.disabled = true;
  renderSubcategories(topic);
  [...ui.topicList.querySelectorAll(".topic-button")].forEach((button) => {
    button.classList.toggle("active", button.querySelector("strong").textContent === topic);
  });
}

function selectSubcategory(subcategory) {
  state.selectedSubcategory = subcategory;
  ui.selectionSummary.textContent = state.mode === "party"
    ? `Party Mode • ${state.selectedTopic} • ${subcategory}. Add player names, then start the round.`
    : `Solo • ${state.selectedTopic} • ${subcategory}`;
  ui.startGameButton.disabled = false;
  [...ui.subcategoryList.querySelectorAll(".subcategory-button")].forEach((button) => {
    button.classList.toggle("active", button.querySelector("strong").textContent === subcategory);
  });
  window.clearTimeout(state.autoStartTimeoutId);
  if (state.mode === "single") {
    state.autoStartTimeoutId = window.setTimeout(() => {
      startGame();
    }, 180);
  }
}

function updateTimerDisplay(secondsLeft) {
  const clamped = Math.max(0, secondsLeft);
  const progress = (clamped / TIME_PER_QUESTION) * 100;
  ui.timerText.textContent = `${clamped}s`;
  ui.timerBar.style.width = `${progress}%`;
  ui.timerBar.style.background = clamped <= 3
    ? "linear-gradient(90deg, #ff6b6b, #ffd166)"
    : "linear-gradient(90deg, #4cc9f0, #f72585)";
}

function lockAnswers(correctAnswer, chosenAnswer) {
  [...ui.answerButtons.querySelectorAll("button")].forEach((button) => {
    button.disabled = true;
    if (button.textContent === correctAnswer) button.classList.add("correct");
    else if (chosenAnswer && button.textContent === chosenAnswer) button.classList.add("wrong");
  });
}

function renderPartyScoreboard() {
  if (state.mode !== "party") {
    ui.partyScoreboard.classList.add("hidden");
    ui.partyScoreboard.innerHTML = "";
    return;
  }
  ui.partyScoreboard.classList.remove("hidden");
  ui.partyScoreboard.innerHTML = state.partyPlayers
    .map((player, index) => `<div class="party-player ${index === state.activePlayerIndex ? "active-player" : ""}"><span>${player.name}</span><strong>${player.score}</strong></div>`)
    .join("");
}

function renderQuestion(question) {
  ui.questionCount.textContent = `${state.currentQuestionIndex + 1} / ${QUESTIONS_PER_GAME}`;
  ui.questionText.textContent = question.question;
  ui.nowPlayingText.textContent = state.mode === "party"
    ? `${state.partyPlayers[state.activePlayerIndex]?.name || "Player"} is up`
    : `${state.selectedTopic} • ${state.selectedSubcategory}`;
  ui.answerButtons.innerHTML = "";
  renderPartyScoreboard();
  shuffle(question.answers).forEach((answer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.textContent = answer;
    button.addEventListener("click", () => handleAnswer(answer));
    ui.answerButtons.appendChild(button);
  });
}

function startGame() {
  if (!state.selectedTopic || !state.selectedSubcategory) return;
  if (state.mode === "party") {
    const players = parsePartyPlayers();
    if (players.length < 2) {
      ui.selectionSummary.textContent = "Party Mode needs at least 2 player names.";
      return;
    }
    state.partyPlayers = players;
    state.activePlayerIndex = 0;
  } else {
    state.partyPlayers = [];
    state.activePlayerIndex = 0;
  }

  clearTimers();
  state.currentQuestions = chooseQuestions(state.selectedTopic, state.selectedSubcategory);
  state.currentQuestionIndex = 0;
  state.score = 0;
  state.hasAnsweredCurrentQuestion = false;
  ui.modeName.textContent = state.mode === "party" ? "Party" : "Solo";
  ui.topicName.textContent = state.selectedTopic;
  ui.subcategoryName.textContent = state.selectedSubcategory;
  ui.scoreDisplay.textContent = "0";
  showScreen(ui.gameScreen);
  showQuestion();
}

function startTimer() {
  state.countdown = TIME_PER_QUESTION;
  updateTimerDisplay(state.countdown);
  state.timerId = window.setInterval(() => {
    state.countdown -= 1;
    updateTimerDisplay(state.countdown);
    if (state.countdown <= 0) {
      window.clearInterval(state.timerId);
      state.timerId = null;
      handleTimeout();
    }
  }, 1000);
}

function showQuestion() {
  clearTimers();
  state.hasAnsweredCurrentQuestion = false;
  setFeedback("");
  renderQuestion(state.currentQuestions[state.currentQuestionIndex]);
  startTimer();
}

function moveToNextQuestion() {
  state.currentQuestionIndex += 1;
  if (state.mode === "party" && state.partyPlayers.length > 0) {
    state.activePlayerIndex = state.currentQuestionIndex % state.partyPlayers.length;
  }
  if (state.currentQuestionIndex >= QUESTIONS_PER_GAME) {
    endGame();
    return;
  }
  showQuestion();
}

function handleAnswer(selectedAnswer) {
  if (state.hasAnsweredCurrentQuestion) return;
  state.hasAnsweredCurrentQuestion = true;
  clearTimers();
  const currentQuestion = state.currentQuestions[state.currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  if (state.mode === "party") {
    const activePlayer = state.partyPlayers[state.activePlayerIndex];
    if (isCorrect) {
      activePlayer.score += 1;
      setFeedback(`${activePlayer.name} got it right. +1 point.`, "correct");
    } else {
      setFeedback(`${activePlayer.name} missed it. Correct answer: ${currentQuestion.correctAnswer}.`, "wrong");
    }
    renderPartyScoreboard();
  } else {
    if (isCorrect) {
      state.score += 1;
      ui.scoreDisplay.textContent = String(state.score);
      setFeedback("Correct! +1 point.", "correct");
    } else {
      setFeedback(`Not quite. The correct answer was ${currentQuestion.correctAnswer}.`, "wrong");
    }
  }

  lockAnswers(currentQuestion.correctAnswer, selectedAnswer);
  ui.nowPlayingText.textContent = isCorrect ? "Score climbing." : "Next question coming up.";
  state.advanceTimeoutId = window.setTimeout(moveToNextQuestion, 1400);
}

function handleTimeout() {
  if (state.hasAnsweredCurrentQuestion) return;
  state.hasAnsweredCurrentQuestion = true;
  const currentQuestion = state.currentQuestions[state.currentQuestionIndex];
  if (state.mode === "party") {
    const activePlayer = state.partyPlayers[state.activePlayerIndex];
    setFeedback(`${activePlayer.name} ran out of time. Correct answer: ${currentQuestion.correctAnswer}.`, "wrong");
  } else {
    setFeedback(`Time's up! The correct answer was ${currentQuestion.correctAnswer}.`, "wrong");
  }
  lockAnswers(currentQuestion.correctAnswer);
  ui.nowPlayingText.textContent = "Next question loading.";
  state.advanceTimeoutId = window.setTimeout(moveToNextQuestion, 1600);
}

function endGame() {
  clearTimers();
  if (state.mode === "party") {
    const ranking = [...state.partyPlayers].sort((a, b) => b.score - a.score);
    const winner = ranking[0];
    ui.finalScore.textContent = `${winner.score} pts`;
    ui.resultMessage.textContent = `${winner.name} wins Party Mode.`;
    ui.resultExtra.innerHTML = ranking.map((player, index) => `<div class="result-rank"><span>${index + 1}. ${player.name}</span><strong>${player.score}</strong></div>`).join("");
    playEffect("great");
  } else {
    ui.finalScore.textContent = `${state.score} / ${QUESTIONS_PER_GAME}`;
    ui.resultExtra.innerHTML = "";
    if (state.score === QUESTIONS_PER_GAME) {
      ui.resultMessage.textContent = "Perfect score. That was a flawless run.";
      playEffect("great");
    } else if (state.score >= 7) {
      ui.resultMessage.textContent = "Strong round. You were on a streak.";
    } else if (state.score >= 4) {
      ui.resultMessage.textContent = "Nice effort. One more round could top that score.";
    } else {
      ui.resultMessage.textContent = "That round was tough, but the next one should feel fresher.";
    }
  }
  showScreen(ui.resultScreen);
}

function initializeGame() {
  ui.gameCard = document.getElementById("game-card");
  ui.startScreen = document.getElementById("start-screen");
  ui.gameScreen = document.getElementById("game-screen");
  ui.resultScreen = document.getElementById("result-screen");
  ui.modeButtons = [...document.querySelectorAll("[data-mode]")];
  ui.partyPanel = document.getElementById("party-panel");
  ui.partyPlayersInput = document.getElementById("party-players");
  ui.topicList = document.getElementById("topic-list");
  ui.subcategoryPanel = document.getElementById("subcategory-panel");
  ui.subcategoryList = document.getElementById("subcategory-list");
  ui.subcategoryCopy = document.getElementById("subcategory-copy");
  ui.selectionSummary = document.getElementById("selection-summary");
  ui.startGameButton = document.getElementById("start-game");
  ui.modeName = document.getElementById("mode-name");
  ui.topicName = document.getElementById("topic-name");
  ui.subcategoryName = document.getElementById("subcategory-name");
  ui.questionCount = document.getElementById("question-count");
  ui.scoreDisplay = document.getElementById("score");
  ui.nowPlayingText = document.getElementById("now-playing-text");
  ui.partyScoreboard = document.getElementById("party-scoreboard");
  ui.timerText = document.getElementById("timer-text");
  ui.timerBar = document.getElementById("timer-bar");
  ui.questionText = document.getElementById("question-text");
  ui.answerButtons = document.getElementById("answer-buttons");
  ui.feedback = document.getElementById("feedback");
  ui.resultMessage = document.getElementById("result-message");
  ui.finalScore = document.getElementById("final-score");
  ui.resultExtra = document.getElementById("result-extra");
  ui.playAgainButton = document.getElementById("play-again");
  ui.replayTopicButton = document.getElementById("replay-topic");

  renderTopics();
  updateModeUI();

  ui.modeButtons.forEach((button) => {
    button.addEventListener("click", () => selectMode(button.dataset.mode));
  });
  ui.startGameButton.addEventListener("click", startGame);
  ui.playAgainButton.addEventListener("click", () => {
    clearTimers();
    showScreen(ui.startScreen);
  });
  ui.replayTopicButton.addEventListener("click", startGame);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeGame);
} else {
  initializeGame();
}
