const travel_dataset = [
    {
      "city": "Paris",
      "country": "France",
      "clues": [
        "This city is home to a famous tower that sparkles every night.",
        "Known as the 'City of Love' and a hub for fashion and art."
      ],
      "fun_fact": [
        "The Eiffel Tower was supposed to be dismantled after 20 years but was saved because it was useful for radio transmissions!",
        "Paris has only one stop sign in the entire city—most intersections rely on priority-to-the-right rules."
      ],
      "trivia": [
        "This city is famous for its croissants and macarons. Bon appétit!",
        "Paris was originally a Roman city called Lutetia."
      ],
      "options": [
        "Paris",
        "London",
        "Berlin",
        "Tokyo"
      ]
    },
    {
      "city": "Tokyo",
      "country": "Japan",
      "clues": [
        "This city features the busiest pedestrian crossing in the world.",
        "Famed for blending futuristic technology with traditional culture."
      ],
      "fun_fact": [
        "Tokyo was once known as Edo before becoming the bustling metropolis it is today.",
        "The city is home to over 150 museums showcasing art, history, and technology."
      ],
      "trivia": [
        "Tokyo's subway system is known for its punctuality and efficiency.",
        "The city hosts one of the world's largest annual cherry blossom festivals."
      ],
      "options": [
        "Tokyo",
        "Seoul",
        "Beijing",
        "Singapore"
      ]
    },
    {
      "city": "New York",
      "country": "USA",
      "clues": [
        "Home to an iconic green statue gifted by France.",
        "Nicknamed 'The Big Apple' with a vibrant theater district."
      ],
      "fun_fact": [
        "Times Square attracts millions of visitors each year and is known for its dazzling billboards.",
        "The city has a subway system that operates 24/7."
      ],
      "trivia": [
        "New York City has its own designated zip code for the Empire State Building.",
        "Central Park is larger than some small countries."
      ],
      "options": [
        "New York",
        "Chicago",
        "Los Angeles",
        "Miami"
      ]
    },
    {
      "city": "London",
      "country": "United Kingdom",
      "clues": [
        "Famous for its historic clock tower and red double-decker buses.",
        "A city steeped in history with royal palaces and modern landmarks."
      ],
      "fun_fact": [
        "London is home to the oldest underground railway network in the world.",
        "The city has over 170 museums, many of which offer free entry."
      ],
      "trivia": [
        "The River Thames flows through the heart of London.",
        "London hosted the Olympic Games in 2012."
      ],
      "options": [
        "London",
        "Edinburgh",
        "Dublin",
        "Manchester"
      ]
    },
    {
      "city": "Rome",
      "country": "Italy",
      "clues": [
        "Known as the Eternal City with ancient ruins at every corner.",
        "Home to the Vatican City and the Colosseum."
      ],
      "fun_fact": [
        "Rome's history spans over two and a half thousand years.",
        "The city is built on seven hills, each with its own historical significance."
      ],
      "trivia": [
        "Fountains and public squares are central to Roman social life.",
        "The Trevi Fountain tradition involves throwing coins for luck."
      ],
      "options": [
        "Rome",
        "Milan",
        "Florence",
        "Venice"
      ]
    },
    {
      "city": "Barcelona",
      "country": "Spain",
      "clues": [
        "Famed for its unique architecture and the works of Gaudi.",
        "A vibrant coastal city with bustling street life and art."
      ],
      "fun_fact": [
        "The Sagrada Familia has been under construction for over a century.",
        "Barcelona's street art scene is as dynamic as its modernist buildings."
      ],
      "trivia": [
        "The city is a major center for football, home to one of the world's best teams.",
        "Barcelona hosted the 1992 Summer Olympics, revitalizing its waterfront."
      ],
      "options": [
        "Barcelona",
        "Madrid",
        "Valencia",
        "Seville"
      ]
    },
    {
      "city": "Berlin",
      "country": "Germany",
      "clues": [
        "Known for its rich history and vibrant arts scene.",
        "A city where modern innovation meets historical landmarks."
      ],
      "fun_fact": [
        "The Berlin Wall once divided the city but now stands as a canvas for street art.",
        "Berlin is one of Europe's greenest cities with many parks and open spaces."
      ],
      "trivia": [
        "Berlin is famous for its diverse nightlife and cultural festivals.",
        "The city hosts the annual Berlin Marathon, attracting runners from around the world."
      ],
      "options": [
        "Berlin",
        "Hamburg",
        "Munich",
        "Frankfurt"
      ]
    },
    {
      "city": "Sydney",
      "country": "Australia",
      "clues": [
        "Home to an iconic opera house with a unique architectural design.",
        "Known for its beautiful harbor and vibrant coastal lifestyle."
      ],
      "fun_fact": [
        "Sydney hosted the 2000 Summer Olympics, marking a milestone in its modern history.",
        "The city is famous for its stunning beaches and outdoor lifestyle."
      ],
      "trivia": [
        "Sydney's Harbour Bridge is one of the most photographed landmarks in Australia.",
        "The city has a thriving arts scene and many annual cultural festivals."
      ],
      "options": [
        "Sydney",
        "Melbourne",
        "Brisbane",
        "Perth"
      ]
    },
    {
      "city": "Moscow",
      "country": "Russia",
      "clues": [
        "Famous for its historic Red Square and the Kremlin.",
        "A city that blends imperial history with modern advancements."
      ],
      "fun_fact": [
        "Moscow is home to the world's largest metro system in terms of station size.",
        "The city has some of the most ornate churches in the world, featuring vibrant domes."
      ],
      "trivia": [
        "Moscow's metro stations are known for their grand, palatial designs.",
        "The city spans 11 time zones across Russia."
      ],
      "options": [
        "Moscow",
        "St. Petersburg",
        "Kazan",
        "Novosibirsk"
      ]
    },
    {
      "city": "Dubai",
      "country": "UAE",
      "clues": [
        "Known for its towering skyscrapers and luxurious lifestyle.",
        "Home to the world's tallest building and extravagant shopping malls."
      ],
      "fun_fact": [
        "Dubai transformed from a small trading port to a global city in just a few decades.",
        "The city hosts man-made islands and indoor ski resorts."
      ],
      "trivia": [
        "Dubai's Burj Khalifa stands as the tallest structure in the world.",
        "The city is a major hub for international business and tourism."
      ],
      "options": [
        "Dubai",
        "Abu Dhabi",
        "Doha",
        "Kuwait City"
      ]
    },
    {
      "city": "Singapore",
      "country": "Singapore",
      "clues": [
        "A city-state known for its cleanliness and efficient public transport.",
        "A melting pot of cultures and a modern global financial hub."
      ],
      "fun_fact": [
        "Singapore's Gardens by the Bay feature futuristic biodomes and supertrees.",
        "Despite its size, the city has an impressive number of Michelin-starred restaurants."
      ],
      "trivia": [
        "Singapore is one of the world's busiest ports, linking east and west.",
        "The country is renowned for its strict laws and regulations ensuring order."
      ],
      "options": [
        "Singapore",
        "Kuala Lumpur",
        "Jakarta",
        "Bangkok"
      ]
    },
    {
      "city": "Hong Kong",
      "country": "Hong Kong",
      "clues": [
        "Famous for its impressive skyline and bustling harbor.",
        "A city where Eastern traditions meet Western influences."
      ],
      "fun_fact": [
        "Hong Kong was a British colony until 1997, which influences its unique culture.",
        "The city is home to one of the world's largest container ports."
      ],
      "trivia": [
        "Hong Kong's Peak Tram offers breathtaking views of the city.",
        "Dim sum is a staple of the city's culinary scene."
      ],
      "options": [
        "Hong Kong",
        "Taipei",
        "Macau",
        "Tokyo"
      ]
    },
    {
      "city": "Amsterdam",
      "country": "Netherlands",
      "clues": [
        "Known for its network of canals and historic narrow houses.",
        "A city famed for its cycling culture and vibrant arts scene."
      ],
      "fun_fact": [
        "Amsterdam is built on over 100 islands, linked by bridges and tunnels.",
        "The city has a rich history of trade and cultural exchange dating back to the 17th century."
      ],
      "trivia": [
        "The Van Gogh Museum houses one of the largest collections of his paintings.",
        "Bicycles outnumber people in this charming Dutch city."
      ],
      "options": [
        "Amsterdam",
        "Rotterdam",
        "Utrecht",
        "The Hague"
      ]
    },
    {
      "city": "Vienna",
      "country": "Austria",
      "clues": [
        "Renowned for its classical music heritage and imperial palaces.",
        "A city where coffee house culture meets grand architecture."
      ],
      "fun_fact": [
        "Vienna was home to famous composers like Mozart and Beethoven.",
        "The city hosts a famous New Year's Concert attended by millions globally."
      ],
      "trivia": [
        "Vienna is known for its traditional waltz and vibrant cultural festivals.",
        "The city has a long-standing tradition of elegant coffee house culture."
      ],
      "options": [
        "Vienna",
        "Salzburg",
        "Innsbruck",
        "Graz"
      ]
    },
    {
      "city": "Istanbul",
      "country": "Turkey",
      "clues": [
        "A city that bridges two continents, Europe and Asia.",
        "Famous for its historic bazaars and magnificent mosques."
      ],
      "fun_fact": [
        "Istanbul was historically known as Byzantium and later Constantinople.",
        "The city is a melting pot of cultures and cuisines."
      ],
      "trivia": [
        "The Grand Bazaar in Istanbul is one of the largest and oldest covered markets in the world.",
        "Istanbul has been the capital of three different empires."
      ],
      "options": [
        "Istanbul",
        "Ankara",
        "Izmir",
        "Antalya"
      ]
    },
    {
      "city": "Rio de Janeiro",
      "country": "Brazil",
      "clues": [
        "Home to the iconic Christ the Redeemer statue overlooking the city.",
        "Famed for its vibrant Carnival festival and lively beaches."
      ],
      "fun_fact": [
        "Rio de Janeiro's Carnival is one of the largest street festivals in the world.",
        "The city features unique landscapes combining mountains and ocean views."
      ],
      "trivia": [
        "Rio's Copacabana and Ipanema beaches are internationally renowned.",
        "The city's samba rhythm influences its lively cultural scene."
      ],
      "options": [
        "Rio de Janeiro",
        "Sao Paulo",
        "Brasilia",
        "Salvador"
      ]
    },
    {
      "city": "Los Angeles",
      "country": "USA",
      "clues": [
        "Known as the heart of the entertainment industry.",
        "Home to world-famous film studios and the Hollywood Walk of Fame."
      ],
      "fun_fact": [
        "Los Angeles is the epicenter of the global film and television industry.",
        "The city's diverse neighborhoods reflect a rich tapestry of cultures."
      ],
      "trivia": [
        "The Santa Monica Pier is a landmark known for its amusement park and ocean views.",
        "LA's traffic is legendary and often cited as a challenge for commuters."
      ],
      "options": [
        "Los Angeles",
        "San Francisco",
        "San Diego",
        "Las Vegas"
      ]
    },
    {
      "city": "Chicago",
      "country": "USA",
      "clues": [
        "Famous for its deep-dish pizza and impressive skyline.",
        "A city that played a pivotal role in the development of modern architecture."
      ],
      "fun_fact": [
        "Chicago is home to one of the largest and most complex public transit systems in the USA.",
        "The city hosts an annual air and water show on Lake Michigan."
      ],
      "trivia": [
        "Chicago's architecture includes iconic skyscrapers and historic landmarks.",
        "The city has a vibrant blues and jazz music scene."
      ],
      "options": [
        "Chicago",
        "New York",
        "Houston",
        "Philadelphia"
      ]
    },
    {
      "city": "Montreal",
      "country": "Canada",
      "clues": [
        "Known for its French heritage and vibrant arts scene.",
        "A city celebrated for its festivals and culinary diversity."
      ],
      "fun_fact": [
        "Montreal hosts one of the largest jazz festivals in the world.",
        "The city is home to underground cities connecting buildings during winter."
      ],
      "trivia": [
        "Montreal's Old Port is a blend of history and modern entertainment.",
        "The city is known for its bagels and poutine."
      ],
      "options": [
        "Montreal",
        "Toronto",
        "Vancouver",
        "Calgary"
      ]
    },
    {
      "city": "Mexico City",
      "country": "Mexico",
      "clues": [
        "One of the largest cities in the world, rich in history and culture.",
        "Home to ancient Aztec ruins and modern urban parks."
      ],
      "fun_fact": [
        "Mexico City was built on the ruins of the Aztec capital Tenochtitlan.",
        "The city boasts a vibrant street food scene celebrated globally."
      ],
      "trivia": [
        "Mexico City is known for its colorful festivals and public art displays.",
        "The city's historic center is a UNESCO World Heritage site."
      ],
      "options": [
        "Mexico City",
        "Guadalajara",
        "Monterrey",
        "Cancun"
      ]
    },
    {
      "city": "Mumbai",
      "country": "India",
      "clues": [
        "The financial capital of India with a bustling film industry.",
        "Home to the Bollywood film scene and busy markets."
      ],
      "fun_fact": [
        "Mumbai is one of the most populous cities in the world.",
        "The city features a mix of colonial architecture and modern skyscrapers."
      ],
      "trivia": [
        "Mumbai's Gateway of India is a major tourist attraction.",
        "The city is known for its vibrant street food and diverse culture."
      ],
      "options": [
        "Mumbai",
        "Delhi",
        "Bangalore",
        "Hyderabad"
      ]
    },
    {
      "city": "Shanghai",
      "country": "China",
      "clues": [
        "A futuristic city known for its skyline and riverfront.",
        "A major global financial center with rich cultural history."
      ],
      "fun_fact": [
        "Shanghai's skyline features innovative skyscraper designs.",
        "The city has a historic waterfront district known as The Bund."
      ],
      "trivia": [
        "Shanghai is one of the world's busiest ports by container volume.",
        "The city blends modern architecture with traditional Chinese heritage."
      ],
      "options": [
        "Shanghai",
        "Beijing",
        "Guangzhou",
        "Shenzhen"
      ]
    },
    {
      "city": "Beijing",
      "country": "China",
      "clues": [
        "Home to the iconic Forbidden City and sprawling imperial palaces.",
        "A city steeped in history with ancient temples and modern development."
      ],
      "fun_fact": [
        "Beijing has hosted the Olympic Games and numerous international events.",
        "The Great Wall of China, a symbol of ancient engineering, is nearby."
      ],
      "trivia": [
        "Beijing is known for its Peking duck, a famous culinary delight.",
        "The city features a mix of traditional hutongs and modern skyscrapers."
      ],
      "options": [
        "Beijing",
        "Shanghai",
        "Tianjin",
        "Chengdu"
      ]
    },
    {
      "city": "Seoul",
      "country": "South Korea",
      "clues": [
        "A high-tech metropolis known for its pop culture and technology.",
        "Home to historic palaces and modern skyscrapers."
      ],
      "fun_fact": [
        "Seoul's rapid growth has turned it into a global technology hub.",
        "The city offers a blend of ancient traditions and cutting-edge innovation."
      ],
      "trivia": [
        "Seoul is famous for its street food markets and K-pop culture.",
        "The city boasts one of the most connected public transit systems in Asia."
      ],
      "options": [
        "Seoul",
        "Busan",
        "Incheon",
        "Daegu"
      ]
    },
    {
      "city": "Bangkok",
      "country": "Thailand",
      "clues": [
        "Known for its ornate temples and vibrant street life.",
        "A city where traditional culture meets a bustling modern scene."
      ],
      "fun_fact": [
        "Bangkok is famous for its delicious street food and lively markets.",
        "The city has an extensive network of canals known as 'khlongs.'"
      ],
      "trivia": [
        "Bangkok is one of Asia's most popular tourist destinations.",
        "The city is home to the Grand Palace, a symbol of Thai heritage."
      ],
      "options": [
        "Bangkok",
        "Phuket",
        "Chiang Mai",
        "Pattaya"
      ]
    },
    {
      "city": "Buenos Aires",
      "country": "Argentina",
      "clues": [
        "A city known for its European-style architecture and tango music.",
        "Often called the 'Paris of South America' due to its vibrant cultural scene."
      ],
      "fun_fact": [
        "Buenos Aires is the birthplace of tango, a passionate dance form.",
        "The city's neighborhoods, like La Boca, are filled with colorful art and history."
      ],
      "trivia": [
        "Buenos Aires hosts numerous festivals celebrating music and dance.",
        "The city is known for its steak and culinary traditions."
      ],
      "options": [
        "Buenos Aires",
        "Cordoba",
        "Rosario",
        "Mendoza"
      ]
    },
    {
      "city": "Cape Town",
      "country": "South Africa",
      "clues": [
        "Known for its stunning coastal views and Table Mountain.",
        "A city where natural beauty meets rich cultural diversity."
      ],
      "fun_fact": [
        "Cape Town is renowned for its dramatic landscapes and scenic drives.",
        "The city is a gateway to some of Africa's most beautiful natural reserves."
      ],
      "trivia": [
        "Cape Town's waterfront offers a blend of shopping, dining, and history.",
        "The city is celebrated for its wineries and culinary scene."
      ],
      "options": [
        "Cape Town",
        "Johannesburg",
        "Durban",
        "Pretoria"
      ]
    },
    {
      "city": "Cairo",
      "country": "Egypt",
      "clues": [
        "Famous for its ancient pyramids and the nearby Sphinx.",
        "A city steeped in millennia of history along the Nile River."
      ],
      "fun_fact": [
        "Cairo is often referred to as 'The City of a Thousand Minarets' for its historic mosques.",
        "The Egyptian Museum in Cairo houses treasures from ancient pharaohs."
      ],
      "trivia": [
        "Cairo's bustling bazaars offer a glimpse into its rich cultural heritage.",
        "The city is a hub for both modern culture and ancient history."
      ],
      "options": [
        "Cairo",
        "Alexandria",
        "Giza",
        "Luxor"
      ]
    },
    {
      "city": "Lisbon",
      "country": "Portugal",
      "clues": [
        "A coastal city known for its picturesque hills and tram rides.",
        "Famous for its vibrant neighborhoods and historic architecture."
      ],
      "fun_fact": [
        "Lisbon is one of the oldest cities in Europe, with a history dating back to ancient times.",
        "The city is known for its traditional Fado music."
      ],
      "trivia": [
        "Lisbon's pastel-colored buildings add to its charm.",
        "The city is built on seven hills, offering stunning viewpoints."
      ],
      "options": [
        "Lisbon",
        "Porto",
        "Faro",
        "Coimbra"
      ]
    },
    {
      "city": "Prague",
      "country": "Czech Republic",
      "clues": [
        "Known as 'The City of a Hundred Spires' due to its beautiful architecture.",
        "A city with a rich history and a well-preserved medieval center."
      ],
      "fun_fact": [
        "Prague is famous for its astronomical clock dating back to the 15th century.",
        "The city has inspired many writers and artists with its enchanting charm."
      ],
      "trivia": [
        "Prague's Charles Bridge is a historic landmark connecting the old town with the castle district.",
        "The city is celebrated for its traditional Czech beer."
      ],
      "options": [
        "Prague",
        "Brno",
        "Ostrava",
        "Plzen"
      ]
    },
    {
      "city": "Dublin",
      "country": "Ireland",
      "clues": [
        "A city known for its literary history and friendly pubs.",
        "Home to historic landmarks and vibrant street culture."
      ],
      "fun_fact": [
        "Dublin is famous for its literary giants like James Joyce and W.B. Yeats.",
        "The city hosts an annual St. Patrick's Day parade drawing crowds from around the world."
      ],
      "trivia": [
        "Dublin's Trinity College houses the ancient Book of Kells.",
        "The city's vibrant music scene is celebrated in its many pubs."
      ],
      "options": [
        "Dublin",
        "Cork",
        "Galway",
        "Limerick"
      ]
    },
    {
      "city": "Edinburgh",
      "country": "United Kingdom",
      "clues": [
        "A city known for its historic castle and annual festivals.",
        "The capital of Scotland, rich in literary and cultural heritage."
      ],
      "fun_fact": [
        "Edinburgh hosts the famous Fringe Festival, the world's largest arts festival.",
        "The city's Royal Mile is lined with historic sites and cobblestone streets."
      ],
      "trivia": [
        "Edinburgh's Old Town and New Town are UNESCO World Heritage sites.",
        "The city has inspired many writers and filmmakers over the years."
      ],
      "options": [
        "Edinburgh",
        "Glasgow",
        "Aberdeen",
        "Dundee"
      ]
    },
    {
      "city": "Stockholm",
      "country": "Sweden",
      "clues": [
        "A city spread across numerous islands connected by bridges.",
        "Known for its blend of modern design and historic architecture."
      ],
      "fun_fact": [
        "Stockholm's Gamla Stan is one of the best-preserved medieval city centers in Europe.",
        "The city is a leader in environmental sustainability and design."
      ],
      "trivia": [
        "Stockholm is home to several world-class museums, including the Vasa Museum.",
        "The city has a reputation for innovative technology and startups."
      ],
      "options": [
        "Stockholm",
        "Gothenburg",
        "Malmo",
        "Uppsala"
      ]
    },
    {
      "city": "Oslo",
      "country": "Norway",
      "clues": [
        "Nestled among forests and hills, offering stunning fjord views.",
        "A city known for its rich maritime history and modern sculptures."
      ],
      "fun_fact": [
        "Oslo is one of the greenest cities in Europe with numerous parks and outdoor spaces.",
        "The city hosts the famous Vigeland Sculpture Park, featuring over 200 sculptures."
      ],
      "trivia": [
        "Oslo's waterfront is a blend of modern architecture and historical ships.",
        "The city is a gateway to Norway's natural beauty."
      ],
      "options": [
        "Oslo",
        "Bergen",
        "Trondheim",
        "Stavanger"
      ]
    },
    {
      "city": "Helsinki",
      "country": "Finland",
      "clues": [
        "A coastal city known for its design and innovative architecture.",
        "A city that blends modern urban life with deep-rooted traditions."
      ],
      "fun_fact": [
        "Helsinki has been recognized as a design capital of the world.",
        "The city hosts an annual festival celebrating Finnish culture and music."
      ],
      "trivia": [
        "Helsinki's islands and parks provide a peaceful escape within the city.",
        "The city's sauna culture is an integral part of Finnish life."
      ],
      "options": [
        "Helsinki",
        "Tampere",
        "Turku",
        "Oulu"
      ]
    },
    {
      "city": "Copenhagen",
      "country": "Denmark",
      "clues": [
        "A city famous for its historic center and modern culinary scene.",
        "Home to the iconic statue of The Little Mermaid."
      ],
      "fun_fact": [
        "Copenhagen is known for its bike-friendly streets and sustainable living.",
        "The city boasts numerous Michelin-starred restaurants."
      ],
      "trivia": [
        "Copenhagen's Tivoli Gardens is one of the world's oldest amusement parks.",
        "The city has a rich history dating back to the Vikings."
      ],
      "options": [
        "Copenhagen",
        "Aarhus",
        "Odense",
        "Aalborg"
      ]
    },
    {
      "city": "Zurich",
      "country": "Switzerland",
      "clues": [
        "A financial hub set beside a picturesque lake and mountain views.",
        "Known for its high quality of life and efficient public services."
      ],
      "fun_fact": [
        "Zurich is consistently ranked among the world's most livable cities.",
        "The city is home to a variety of museums and historic sites."
      ],
      "trivia": [
        "Zurich's old town is a charming maze of narrow lanes and medieval buildings.",
        "The city is a major center for banking and finance."
      ],
      "options": [
        "Zurich",
        "Geneva",
        "Basel",
        "Bern"
      ]
    },
    {
      "city": "Geneva",
      "country": "Switzerland",
      "clues": [
        "Known for its international organizations and diplomatic history.",
        "A city set along the shores of a stunning lake with views of the Alps."
      ],
      "fun_fact": [
        "Geneva is home to numerous international agencies including the UN and WHO.",
        "The city has a rich history of humanitarian efforts and peace negotiations."
      ],
      "trivia": [
        "Geneva's Jet d'Eau is one of the tallest water fountains in the world.",
        "The city is famous for its luxury watches and chocolate."
      ],
      "options": [
        "Geneva",
        "Zurich",
        "Lausanne",
        "Lucerne"
      ]
    },
    {
      "city": "Brussels",
      "country": "Belgium",
      "clues": [
        "The administrative heart of the European Union.",
        "Known for its comic art, chocolates, and iconic Atomium structure."
      ],
      "fun_fact": [
        "Brussels is famous for its delicious waffles and beer.",
        "The city has a rich history of art and architecture dating back centuries."
      ],
      "trivia": [
        "Brussels hosts many international conferences and diplomatic meetings.",
        "The city is renowned for its blend of modern and classical architecture."
      ],
      "options": [
        "Brussels",
        "Antwerp",
        "Ghent",
        "Bruges"
      ]
    },
    {
      "city": "Athens",
      "country": "Greece",
      "clues": [
        "A city known as the cradle of Western civilization.",
        "Home to ancient ruins including the Acropolis and Parthenon."
      ],
      "fun_fact": [
        "Athens has been continuously inhabited for over 3,000 years.",
        "The city offers a mix of ancient history and modern culture."
      ],
      "trivia": [
        "Athens is famous for its contributions to art, philosophy, and democracy.",
        "The city hosts lively street markets and modern cafes."
      ],
      "options": [
        "Athens",
        "Thessaloniki",
        "Patras",
        "Heraklion"
      ]
    },
    {
      "city": "Budapest",
      "country": "Hungary",
      "clues": [
        "A city split by the Danube River into two distinct parts.",
        "Renowned for its thermal baths and stunning architecture."
      ],
      "fun_fact": [
        "Budapest is often called the 'Pearl of the Danube' due to its beauty.",
        "The city has one of the largest thermal bath complexes in Europe."
      ],
      "trivia": [
        "Budapest's Parliament building is one of the largest in the world.",
        "The city is famous for its ruin bars and vibrant nightlife."
      ],
      "options": [
        "Budapest",
        "Debrecen",
        "Szeged",
        "Miskolc"
      ]
    },
    {
      "city": "Warsaw",
      "country": "Poland",
      "clues": [
        "A city rebuilt from ruins with a rich history of resilience.",
        "Known for its modern skyline alongside historic Old Town."
      ],
      "fun_fact": [
        "Warsaw's Old Town is a UNESCO World Heritage site.",
        "The city was almost entirely rebuilt after World War II."
      ],
      "trivia": [
        "Warsaw is a cultural hub with numerous theaters and museums.",
        "The city blends modern architecture with historical landmarks."
      ],
      "options": [
        "Warsaw",
        "Krakow",
        "Gdansk",
        "Poznan"
      ]
    },
    {
      "city": "Krakow",
      "country": "Poland",
      "clues": [
        "A city renowned for its well-preserved medieval core.",
        "Home to the historic Wawel Castle and vibrant cultural scene."
      ],
      "fun_fact": [
        "Krakow was once the capital of Poland and remains a cultural center.",
        "The city hosts numerous festivals celebrating art and history."
      ],
      "trivia": [
        "Krakow's Main Market Square is one of the largest medieval town squares in Europe.",
        "The city has a rich tradition of folklore and craftsmanship."
      ],
      "options": [
        "Krakow",
        "Warsaw",
        "Wroclaw",
        "Lodz"
      ]
    },
    {
      "city": "Munich",
      "country": "Germany",
      "clues": [
        "Famous for its annual beer festival and rich Bavarian traditions.",
        "A city where modern industry meets historical charm."
      ],
      "fun_fact": [
        "Munich is home to the Oktoberfest, the world's largest beer festival.",
        "The city boasts impressive museums and art galleries."
      ],
      "trivia": [
        "Munich's Marienplatz is a bustling square at the heart of the city.",
        "The city is known for its blend of modern and traditional architecture."
      ],
      "options": [
        "Munich",
        "Berlin",
        "Frankfurt",
        "Hamburg"
      ]
    },
    {
      "city": "Frankfurt",
      "country": "Germany",
      "clues": [
        "A global financial center with a striking skyline.",
        "Known for its trade fairs and rich commercial history."
      ],
      "fun_fact": [
        "Frankfurt is home to the European Central Bank.",
        "The city blends modern skyscrapers with historic Römer square."
      ],
      "trivia": [
        "Frankfurt hosts one of the world's largest book fairs annually.",
        "The city is a major transportation hub in Europe."
      ],
      "options": [
        "Frankfurt",
        "Munich",
        "Cologne",
        "Stuttgart"
      ]
    },
    {
      "city": "Sao Paulo",
      "country": "Brazil",
      "clues": [
        "A sprawling metropolis known for its cultural diversity.",
        "The largest city in Brazil and a major economic hub."
      ],
      "fun_fact": [
        "Sao Paulo is famous for its vibrant art scene and street art.",
        "The city hosts numerous festivals celebrating its diverse heritage."
      ],
      "trivia": [
        "Sao Paulo is one of the most populous cities in the Americas.",
        "The city's architecture ranges from colonial to ultra-modern."
      ],
      "options": [
        "Sao Paulo",
        "Rio de Janeiro",
        "Belo Horizonte",
        "Curitiba"
      ]
    },
    {
      "city": "Bogota",
      "country": "Colombia",
      "clues": [
        "A high-altitude city known for its vibrant street art and culture.",
        "Home to historic neighborhoods and modern urban life."
      ],
      "fun_fact": [
        "Bogota is located on a high plateau in the Andes mountains.",
        "The city has a dynamic art scene and numerous cultural festivals."
      ],
      "trivia": [
        "Bogota's Gold Museum houses one of the largest collections of pre-Columbian gold artifacts.",
        "The city is known for its diverse culinary offerings."
      ],
      "options": [
        "Bogota",
        "Medellin",
        "Cali",
        "Cartagena"
      ]
    },
    {
      "city": "Lima",
      "country": "Peru",
      "clues": [
        "A coastal capital known for its rich culinary traditions.",
        "Home to ancient ruins and modern urban flair."
      ],
      "fun_fact": [
        "Lima was the center of the Spanish Viceroyalty in South America.",
        "The city is famous for its fusion of indigenous and Spanish cuisine."
      ],
      "trivia": [
        "Lima's historic center is a UNESCO World Heritage site.",
        "The city is known for its ceviche and vibrant street markets."
      ],
      "options": [
        "Lima",
        "Cusco",
        "Arequipa",
        "Trujillo"
      ]
    },
    {
      "city": "Santiago",
      "country": "Chile",
      "clues": [
        "Nestled between the Andes and the Pacific, offering stunning mountain views.",
        "A city that blends modernity with rich cultural traditions."
      ],
      "fun_fact": [
        "Santiago is Chile's largest city and a major cultural center.",
        "The city is known for its dynamic art scene and historical neighborhoods."
      ],
      "trivia": [
        "Santiago's central market is famous for fresh produce and local cuisine.",
        "The city is a gateway to nearby vineyards and ski resorts."
      ],
      "options": [
        "Santiago",
        "Valparaiso",
        "Concepcion",
        "La Serena"
      ]
    },
    {
      "city": "Auckland",
      "country": "New Zealand",
      "clues": [
        "A vibrant city known for its scenic harbor and multicultural community.",
        "A gateway to numerous islands and outdoor adventures."
      ],
      "fun_fact": [
        "Auckland is often called the 'City of Sails' due to its active boating culture.",
        "The city has a diverse cultural scene and hosts many festivals."
      ],
      "trivia": [
        "Auckland's skyline is dominated by the iconic Sky Tower.",
        "The city offers stunning views of the surrounding volcanic landscape."
      ],
      "options": [
        "Auckland",
        "Wellington",
        "Christchurch",
        "Hamilton"
      ]
    },
    {
      "city": "Wellington",
      "country": "New Zealand",
      "clues": [
        "The capital of New Zealand, known for its creative arts scene.",
        "A city nestled between a harbor and rolling hills."
      ],
      "fun_fact": [
        "Wellington is renowned for its film industry and vibrant coffee culture.",
        "The city has a compact downtown filled with theaters and galleries."
      ],
      "trivia": [
        "Wellington is often referred to as 'Windy Welly' due to its breezy conditions.",
        "The city's harbor offers picturesque views and outdoor activities."
      ],
      "options": [
        "Wellington",
        "Auckland",
        "Dunedin",
        "Queenstown"
      ]
    },
    {
      "city": "Reykjavik",
      "country": "Iceland",
      "clues": [
        "The world's northernmost capital, known for its modern design and natural beauty.",
        "A city that serves as a gateway to Iceland's unique landscapes."
      ],
      "fun_fact": [
        "Reykjavik is known for its colorful buildings and innovative architecture.",
        "The city has a vibrant music scene and hosts numerous festivals."
      ],
      "trivia": [
        "Reykjavik is a starting point for exploring Iceland's geothermal wonders.",
        "The city is famous for its midnight sun and northern lights."
      ],
      "options": [
        "Reykjavik",
        "Akureyri",
        "Keflavik",
        "Selfoss"
      ]
    },
    {
      "city": "Tallinn",
      "country": "Estonia",
      "clues": [
        "A medieval city known for its well-preserved old town.",
        "Famous for its blend of history and modern digital innovation."
      ],
      "fun_fact": [
        "Tallinn's old town is a UNESCO World Heritage site.",
        "The city is a leader in digital governance and e-residency programs."
      ],
      "trivia": [
        "Tallinn is known for its charming cobblestone streets and historic buildings.",
        "The city hosts many tech startups and innovative enterprises."
      ],
      "options": [
        "Tallinn",
        "Tartu",
        "Narva",
        "Parnu"
      ]
    },
    {
      "city": "Riga",
      "country": "Latvia",
      "clues": [
        "A city known for its art nouveau architecture and lively cultural scene.",
        "The capital of Latvia, blending historical charm with modern flair."
      ],
      "fun_fact": [
        "Riga's architecture includes some of the finest examples of art nouveau in Europe.",
        "The city hosts a variety of music and arts festivals throughout the year."
      ],
      "trivia": [
        "Riga's central market is one of the largest in Europe, housed in old Zeppelin hangars.",
        "The city is known for its vibrant street art and creative spaces."
      ],
      "options": [
        "Riga",
        "Daugavpils",
        "Liepaja",
        "Jelgava"
      ]
    },
    {
      "city": "Vilnius",
      "country": "Lithuania",
      "clues": [
        "A city with a rich history and a charming old town.",
        "Known for its baroque architecture and artistic heritage."
      ],
      "fun_fact": [
        "Vilnius has one of the largest preserved medieval old towns in Eastern Europe.",
        "The city is a center for arts and cultural festivals."
      ],
      "trivia": [
        "Vilnius is known for its quirky street art and vibrant cafe culture.",
        "The city played an important role in the history of the Grand Duchy of Lithuania."
      ],
      "options": [
        "Vilnius",
        "Kaunas",
        "Klaipeda",
        "Siauliai"
      ]
    },
    {
      "city": "Bratislava",
      "country": "Slovakia",
      "clues": [
        "A city nestled on the banks of the Danube with a charming old town.",
        "Known for its medieval castle overlooking modern developments."
      ],
      "fun_fact": [
        "Bratislava's castle offers panoramic views of the surrounding countryside.",
        "The city has a unique mix of old-world charm and contemporary style."
      ],
      "trivia": [
        "Bratislava is a cultural hub with numerous festivals and events.",
        "The city is known for its vibrant street life and historic bridges."
      ],
      "options": [
        "Bratislava",
        "Kosice",
        "Nitra",
        "Trnava"
      ]
    },
    {
      "city": "Belgrade",
      "country": "Serbia",
      "clues": [
        "A city with a rich history and a lively riverfront.",
        "Known for its vibrant nightlife and historic fortresses."
      ],
      "fun_fact": [
        "Belgrade is one of the oldest cities in Europe, with history spanning millennia.",
        "The city sits at the confluence of the Danube and Sava rivers."
      ],
      "trivia": [
        "Belgrade is famous for its bohemian quarter and cultural festivals.",
        "The city's historic Kalemegdan fortress is a major tourist attraction."
      ],
      "options": [
        "Belgrade",
        "Novi Sad",
        "Nis",
        "Kragujevac"
      ]
    },
    {
      "city": "Bucharest",
      "country": "Romania",
      "clues": [
        "The capital of Romania, known for its wide avenues and eclectic architecture.",
        "A city that blends communist-era buildings with modern structures."
      ],
      "fun_fact": [
        "Bucharest is nicknamed 'Little Paris' due to its elegant architecture.",
        "The city hosts a vibrant arts and cultural scene."
      ],
      "trivia": [
        "Bucharest's Palace of the Parliament is one of the largest administrative buildings in the world.",
        "The city has a rich history and diverse cultural influences."
      ],
      "options": [
        "Bucharest",
        "Cluj-Napoca",
        "Timisoara",
        "Iasi"
      ]
    },
    {
      "city": "Sofia",
      "country": "Bulgaria",
      "clues": [
        "A city with a mix of ancient history and modern living.",
        "Known for its scenic mountain backdrop and historic churches."
      ],
      "fun_fact": [
        "Sofia is one of the oldest cities in Europe, with evidence of habitation dating back thousands of years.",
        "The city has a blend of Roman, Ottoman, and Soviet influences."
      ],
      "trivia": [
        "Sofia's Boyana Church is a UNESCO World Heritage site.",
        "The city is known for its vibrant street art and cafe culture."
      ],
      "options": [
        "Sofia",
        "Plovdiv",
        "Varna",
        "Burgas"
      ]
    },
    {
      "city": "Minsk",
      "country": "Belarus",
      "clues": [
        "The capital of Belarus, known for its Soviet-era architecture.",
        "A city that has rebuilt itself with modern landmarks after historic events."
      ],
      "fun_fact": [
        "Minsk is known for its wide boulevards and impressive public squares.",
        "The city hosts several annual festivals celebrating its culture."
      ],
      "trivia": [
        "Minsk's museums showcase its rich history and cultural heritage.",
        "The city is a center for performing arts in Belarus."
      ],
      "options": [
        "Minsk",
        "Gomel",
        "Brest",
        "Vitebsk"
      ]
    },
    {
      "city": "Abu Dhabi",
      "country": "UAE",
      "clues": [
        "A modern city known for its luxurious architecture and cultural landmarks.",
        "Home to magnificent mosques and world-class museums."
      ],
      "fun_fact": [
        "Abu Dhabi hosts the stunning Sheikh Zayed Grand Mosque.",
        "The city has invested heavily in sustainable urban development."
      ],
      "trivia": [
        "Abu Dhabi is a major hub for art and culture in the Middle East.",
        "The city blends traditional Arabian culture with futuristic design."
      ],
      "options": [
        "Abu Dhabi",
        "Dubai",
        "Doha",
        "Muscat"
      ]
    },
    {
      "city": "Doha",
      "country": "Qatar",
      "clues": [
        "A rapidly developing city with a futuristic skyline.",
        "Known for its cultural museums and desert landscapes."
      ],
      "fun_fact": [
        "Doha is home to the Museum of Islamic Art, an architectural masterpiece.",
        "The city has hosted numerous international sporting events."
      ],
      "trivia": [
        "Doha's Corniche offers stunning views of the Persian Gulf.",
        "The city is a hub for commerce and cultural exchange in the region."
      ],
      "options": [
        "Doha",
        "Manama",
        "Abu Dhabi",
        "Riyadh"
      ]
    },
    {
      "city": "Beirut",
      "country": "Lebanon",
      "clues": [
        "Known for its vibrant nightlife and rich cultural history.",
        "A city that has rebuilt itself with resilience and creativity."
      ],
      "fun_fact": [
        "Beirut is often called the 'Paris of the Middle East' for its charm.",
        "The city has a history that spans thousands of years."
      ],
      "trivia": [
        "Beirut's culinary scene is a blend of Mediterranean flavors and local traditions.",
        "The city is known for its art galleries and lively music festivals."
      ],
      "options": [
        "Beirut",
        "Tripoli",
        "Sidon",
        "Tyre"
      ]
    },
    {
      "city": "Amman",
      "country": "Jordan",
      "clues": [
        "The capital of Jordan, blending ancient history with modernity.",
        "A city known for its bustling souks and archaeological sites."
      ],
      "fun_fact": [
        "Amman has grown rapidly from a small town to a modern metropolis.",
        "The city is a gateway to ancient sites like Petra and Jerash."
      ],
      "trivia": [
        "Amman offers a mix of traditional Middle Eastern cuisine and modern dining.",
        "The city's citadel overlooks a panorama of historic ruins."
      ],
      "options": [
        "Amman",
        "Aqaba",
        "Irbid",
        "Zarqa"
      ]
    },
    {
      "city": "Tel Aviv",
      "country": "Israel",
      "clues": [
        "A vibrant coastal city known for its nightlife and beaches.",
        "Renowned for its modern architecture and startup culture."
      ],
      "fun_fact": [
        "Tel Aviv is often dubbed the 'Silicon Wadi' due to its thriving tech scene.",
        "The city never sleeps, with bustling markets and cultural events around the clock."
      ],
      "trivia": [
        "Tel Aviv's promenade is popular for leisurely walks and stunning sea views.",
        "The city has a rich history that contrasts with its modern vibrancy."
      ],
      "options": [
        "Tel Aviv",
        "Jerusalem",
        "Haifa",
        "Eilat"
      ]
    },
    {
      "city": "Karachi",
      "country": "Pakistan",
      "clues": [
        "The largest city in Pakistan and a major economic hub.",
        "Known for its bustling ports and diverse cultural scene."
      ],
      "fun_fact": [
        "Karachi is one of the world's most populous cities with a rich maritime history.",
        "The city has a vibrant arts and culinary scene reflecting its diverse population."
      ],
      "trivia": [
        "Karachi is home to historic bazaars and modern shopping districts.",
        "The city plays a pivotal role in Pakistan's economy and trade."
      ],
      "options": [
        "Karachi",
        "Lahore",
        "Islamabad",
        "Faisalabad"
      ]
    },
    {
      "city": "Colombo",
      "country": "Sri Lanka",
      "clues": [
        "The capital city known for its colonial architecture and tropical charm.",
        "A vibrant city blending modernity with historic influences."
      ],
      "fun_fact": [
        "Colombo's streets reflect a mix of Portuguese, Dutch, and British architectural styles.",
        "The city is a major economic hub in South Asia."
      ],
      "trivia": [
        "Colombo is famous for its bustling markets and seaside promenade.",
        "The city hosts numerous cultural festivals throughout the year."
      ],
      "options": [
        "Colombo",
        "Kandy",
        "Galle",
        "Jaffna"
      ]
    },
    {
      "city": "Kathmandu",
      "country": "Nepal",
      "clues": [
        "A city nestled in a valley and gateway to the Himalayas.",
        "Known for its ancient temples and vibrant street life."
      ],
      "fun_fact": [
        "Kathmandu's Durbar Square is a UNESCO World Heritage site.",
        "The city is steeped in traditions and rich in cultural heritage."
      ],
      "trivia": [
        "Kathmandu is famous for its intricate wood carvings and historic pagodas.",
        "The city offers stunning views of surrounding mountain peaks."
      ],
      "options": [
        "Kathmandu",
        "Pokhara",
        "Lukla",
        "Biratnagar"
      ]
    },
    {
      "city": "Hanoi",
      "country": "Vietnam",
      "clues": [
        "A city known for its centuries-old architecture and rich cultural heritage.",
        "Home to bustling markets and serene lakes."
      ],
      "fun_fact": [
        "Hanoi's Old Quarter is a maze of narrow streets with a rich history.",
        "The city is renowned for its traditional Vietnamese cuisine."
      ],
      "trivia": [
        "Hanoi is known for its vibrant street food culture and local coffee shops.",
        "The city has numerous lakes and parks that provide a refreshing escape."
      ],
      "options": [
        "Hanoi",
        "Ho Chi Minh City",
        "Da Nang",
        "Hue"
      ]
    },
    {
      "city": "Ho Chi Minh City",
      "country": "Vietnam",
      "clues": [
        "A bustling metropolis known for its rapid growth and dynamic energy.",
        "A city that blends traditional markets with modern skyscrapers."
      ],
      "fun_fact": [
        "Ho Chi Minh City was formerly known as Saigon.",
        "The city is a major economic center in Vietnam with a vibrant street life."
      ],
      "trivia": [
        "The city is famous for its flavorful street food and night markets.",
        "Ho Chi Minh City played a crucial role in modern Vietnamese history."
      ],
      "options": [
        "Ho Chi Minh City",
        "Hanoi",
        "Nha Trang",
        "Can Tho"
      ]
    },
    {
      "city": "Manila",
      "country": "Philippines",
      "clues": [
        "A bustling city that serves as the heart of the Philippines.",
        "Known for its historic walled city and vibrant street life."
      ],
      "fun_fact": [
        "Manila was once a key hub in the Spanish colonial empire.",
        "The city is famous for its colorful festivals and lively markets."
      ],
      "trivia": [
        "Manila's Intramuros is a historic district that tells the story of its colonial past.",
        "The city is a melting pot of cultures and modern influences."
      ],
      "options": [
        "Manila",
        "Cebu",
        "Davao",
        "Baguio"
      ]
    },
    {
      "city": "Jakarta",
      "country": "Indonesia",
      "clues": [
        "A sprawling metropolis known for its bustling markets and vibrant street life.",
        "The capital city with a mix of modern skyscrapers and colonial heritage."
      ],
      "fun_fact": [
        "Jakarta is one of the most populous cities in Southeast Asia.",
        "The city has a rich cultural heritage influenced by various civilizations."
      ],
      "trivia": [
        "Jakarta is known for its dynamic arts scene and culinary diversity.",
        "The city hosts numerous festivals that celebrate its multicultural background."
      ],
      "options": [
        "Jakarta",
        "Surabaya",
        "Bandung",
        "Medan"
      ]
    },
    {
      "city": "Kuala Lumpur",
      "country": "Malaysia",
      "clues": [
        "Famous for its iconic twin towers and multicultural heritage.",
        "A modern city with a blend of traditional markets and skyscrapers."
      ],
      "fun_fact": [
        "Kuala Lumpur's Petronas Towers were the tallest buildings in the world at one point.",
        "The city is a melting pot of Malay, Chinese, and Indian cultures."
      ],
      "trivia": [
        "Kuala Lumpur is known for its vibrant street food and night markets.",
        "The city offers a unique blend of modernity and tradition."
      ],
      "options": [
        "Kuala Lumpur",
        "George Town",
        "Ipoh",
        "Malacca"
      ]
    },
    {
      "city": "Perth",
      "country": "Australia",
      "clues": [
        "A sun-soaked city known for its beaches and laid-back lifestyle.",
        "Located on the western coast of Australia with a thriving cultural scene."
      ],
      "fun_fact": [
        "Perth is one of the most isolated major cities in the world.",
        "The city is known for its outdoor festivals and scenic riverfront."
      ],
      "trivia": [
        "Perth's beaches are popular for surfing and sunbathing.",
        "The city offers a blend of modern amenities and natural beauty."
      ],
      "options": [
        "Perth",
        "Sydney",
        "Melbourne",
        "Adelaide"
      ]
    },
    {
      "city": "Adelaide",
      "country": "Australia",
      "clues": [
        "Known for its vibrant arts scene and annual festivals.",
        "A city celebrated for its wine regions and historic architecture."
      ],
      "fun_fact": [
        "Adelaide hosts numerous festivals, including the Adelaide Fringe.",
        "The city is close to famous wine regions like Barossa Valley."
      ],
      "trivia": [
        "Adelaide's central market is a foodie’s delight.",
        "The city offers a blend of modern design and colonial heritage."
      ],
      "options": [
        "Adelaide",
        "Melbourne",
        "Perth",
        "Brisbane"
      ]
    },
    {
      "city": "Brisbane",
      "country": "Australia",
      "clues": [
        "A city known for its warm climate and riverfront attractions.",
        "Home to a blend of modern skyscrapers and lush parks."
      ],
      "fun_fact": [
        "Brisbane hosts the annual Riverfire festival with spectacular fireworks.",
        "The city is a gateway to popular beach destinations along the coast."
      ],
      "trivia": [
        "Brisbane's South Bank features cultural institutions and outdoor dining.",
        "The city is known for its friendly atmosphere and vibrant arts scene."
      ],
      "options": [
        "Brisbane",
        "Gold Coast",
        "Sydney",
        "Canberra"
      ]
    },
    {
      "city": "Darwin",
      "country": "Australia",
      "clues": [
        "A tropical city known for its proximity to natural wonders.",
        "Famous for its rich Indigenous culture and laid-back lifestyle."
      ],
      "fun_fact": [
        "Darwin is the gateway to Kakadu National Park and other natural reserves.",
        "The city has a unique mix of Aboriginal culture and modern influences."
      ],
      "trivia": [
        "Darwin's waterfront is a popular spot for locals and tourists alike.",
        "The city is known for its vibrant markets and outdoor festivals."
      ],
      "options": [
        "Darwin",
        "Alice Springs",
        "Perth",
        "Adelaide"
      ]
    },
    {
      "city": "Salvador",
      "country": "Brazil",
      "clues": [
        "A city renowned for its Afro-Brazilian culture and vibrant music.",
        "Known for its colonial architecture and colorful festivals."
      ],
      "fun_fact": [
        "Salvador was one of the first colonial capitals in the Americas.",
        "The city is famous for its rich tradition of capoeira and samba."
      ],
      "trivia": [
        "Salvador's historic center is a UNESCO World Heritage site.",
        "The city offers a blend of cultural traditions and modern urban life."
      ],
      "options": [
        "Salvador",
        "Recife",
        "Fortaleza",
        "Natal"
      ]
    },
    {
      "city": "Porto",
      "country": "Portugal",
      "clues": [
        "Famous for its port wine and picturesque riverside setting.",
        "A city with a rich history and charming narrow streets."
      ],
      "fun_fact": [
        "Porto's historic center is a UNESCO World Heritage site.",
        "The city is celebrated for its wine cellars and culinary delights."
      ],
      "trivia": [
        "Porto is known for its stunning bridges that span the Douro River.",
        "The city's architecture is a blend of medieval and modern styles."
      ],
      "options": [
        "Porto",
        "Lisbon",
        "Coimbra",
        "Braga"
      ]
    },
    {
      "city": "Valencia",
      "country": "Spain",
      "clues": [
        "A vibrant coastal city known for its futuristic architecture.",
        "Home to a famous annual festival celebrating art and fire."
      ],
      "fun_fact": [
        "Valencia is the birthplace of the traditional Spanish paella.",
        "The city is known for its stunning City of Arts and Sciences complex."
      ],
      "trivia": [
        "Valencia hosts the annual Las Fallas festival with spectacular fireworks.",
        "The city is a hub for innovation and modern art."
      ],
      "options": [
        "Valencia",
        "Madrid",
        "Barcelona",
        "Seville"
      ]
    },
    {
      "city": "Seville",
      "country": "Spain",
      "clues": [
        "A historic city known for its flamenco dancing and Moorish architecture.",
        "Home to grand palaces and vibrant street festivals."
      ],
      "fun_fact": [
        "Seville's Alcazar is one of the oldest royal palaces still in use.",
        "The city is famous for its lively Feria de Abril celebrations."
      ],
      "trivia": [
        "Seville is known for its orange blossoms and picturesque gardens.",
        "The city blends ancient traditions with modern cultural events."
      ],
      "options": [
        "Seville",
        "Granada",
        "Madrid",
        "Valencia"
      ]
    },
    {
      "city": "Malaga",
      "country": "Spain",
      "clues": [
        "A sunny coastal city known for its beaches and historic sites.",
        "Home to art museums and a vibrant cultural scene."
      ],
      "fun_fact": [
        "Malaga is the birthplace of the famous artist Pablo Picasso.",
        "The city has transformed from a fishing port to a modern cultural hub."
      ],
      "trivia": [
        "Malaga's historic center features narrow streets and ancient architecture.",
        "The city is renowned for its lively festivals and culinary traditions."
      ],
      "options": [
        "Malaga",
        "Seville",
        "Barcelona",
        "Madrid"
      ]
    },
    {
      "city": "Bilbao",
      "country": "Spain",
      "clues": [
        "A city that blends industrial heritage with modern art and architecture.",
        "Home to the famous Guggenheim Museum."
      ],
      "fun_fact": [
        "Bilbao's transformation from an industrial center to a cultural hotspot is remarkable.",
        "The Guggenheim Museum Bilbao is an icon of contemporary architecture."
      ],
      "trivia": [
        "Bilbao is known for its innovative urban regeneration projects.",
        "The city has a unique culinary scene featuring pintxos."
      ],
      "options": [
        "Bilbao",
        "San Sebastian",
        "Vitoria",
        "Pamplona"
      ]
    },
    {
      "city": "Montevideo",
      "country": "Uruguay",
      "clues": [
        "The capital city known for its beachfront promenade and laid-back vibe.",
        "A city with a blend of colonial charm and modern urban culture."
      ],
      "fun_fact": [
        "Montevideo has a rich cultural scene with theaters, museums, and festivals.",
        "The city is known for its extensive parks and seaside promenades."
      ],
      "trivia": [
        "Montevideo's old town features historic buildings and lively plazas.",
        "The city is celebrated for its vibrant music and dance traditions."
      ],
      "options": [
        "Montevideo",
        "Punta del Este",
        "Salto",
        "Colonia"
      ]
    },
    {
      "city": "Asuncion",
      "country": "Paraguay",
      "clues": [
        "The capital city known for its colonial architecture and river views.",
        "A blend of historic landmarks and modern developments."
      ],
      "fun_fact": [
        "Asuncion is one of the oldest cities in South America.",
        "The city is known for its warm, welcoming atmosphere."
      ],
      "trivia": [
        "Asuncion's historic center is rich in cultural heritage.",
        "The city is a hub for arts, music, and local traditions."
      ],
      "options": [
        "Asuncion",
        "Ciudad del Este",
        "Encarnacion",
        "Concepcion"
      ]
    },
    {
      "city": "Quito",
      "country": "Ecuador",
      "clues": [
        "A high-altitude capital set in the Andean mountains.",
        "Known for its well-preserved colonial center."
      ],
      "fun_fact": [
        "Quito is one of the highest official capital cities in the world.",
        "The city is famous for its vibrant markets and traditional crafts."
      ],
      "trivia": [
        "Quito's historic center is a UNESCO World Heritage site.",
        "The city offers stunning views of surrounding volcanoes."
      ],
      "options": [
        "Quito",
        "Guayaquil",
        "Cuenca",
        "Ambato"
      ]
    },
    {
      "city": "Guayaquil",
      "country": "Ecuador",
      "clues": [
        "A bustling port city known for its riverfront and vibrant culture.",
        "The economic hub of Ecuador with a dynamic urban scene."
      ],
      "fun_fact": [
        "Guayaquil is famous for its Malecón, a scenic waterfront promenade.",
        "The city has experienced rapid growth and modernization in recent years."
      ],
      "trivia": [
        "Guayaquil is known for its tropical climate and lively festivals.",
        "The city is a key center for trade and commerce in Ecuador."
      ],
      "options": [
        "Guayaquil",
        "Quito",
        "Manta",
        "Portoviejo"
      ]
    },
    {
      "city": "Dakar",
      "country": "Senegal",
      "clues": [
        "A vibrant coastal city known for its music and art scene.",
        "The capital of Senegal with a rich blend of cultures."
      ],
      "fun_fact": [
        "Dakar is famous for its colorful markets and lively street life.",
        "The city is a cultural hub that has influenced music and art across Africa."
      ],
      "trivia": [
        "Dakar hosts the annual Dakar Rally, a challenging off-road race.",
        "The city is known for its diverse culinary traditions."
      ],
      "options": [
        "Dakar",
        "Saint-Louis",
        "Touba",
        "Ziguinchor"
      ]
    },
    {
      "city": "Accra",
      "country": "Ghana",
      "clues": [
        "A bustling city known for its historical forts and vibrant markets.",
        "The capital of Ghana, rich in cultural heritage."
      ],
      "fun_fact": [
        "Accra is famous for its blend of modern development and traditional culture.",
        "The city hosts numerous festivals celebrating Ghanaian music and art."
      ],
      "trivia": [
        "Accra's coastal location contributes to its vibrant seafood cuisine.",
        "The city is a center for education and cultural institutions."
      ],
      "options": [
        "Accra",
        "Kumasi",
        "Tamale",
        "Takoradi"
      ]
    },
    {
      "city": "Nairobi",
      "country": "Kenya",
      "clues": [
        "A dynamic city known as the gateway to African safaris.",
        "Home to diverse wildlife and a bustling urban center."
      ],
      "fun_fact": [
        "Nairobi is one of the few cities in the world with a national park on its doorstep.",
        "The city has a vibrant mix of modern business and traditional culture."
      ],
      "trivia": [
        "Nairobi's museums showcase the rich history of Kenya.",
        "The city is known for its entrepreneurial spirit and diverse cuisine."
      ],
      "options": [
        "Nairobi",
        "Mombasa",
        "Kisumu",
        "Eldoret"
      ]
    },
    {
      "city": "Lagos",
      "country": "Nigeria",
      "clues": [
        "A bustling megacity known for its vibrant music and entertainment scene.",
        "The economic hub of Nigeria with a rich cultural tapestry."
      ],
      "fun_fact": [
        "Lagos is one of the fastest-growing cities in Africa.",
        "The city is famous for its dynamic art, music, and film industries."
      ],
      "trivia": [
        "Lagos hosts numerous festivals celebrating its diverse cultural heritage.",
        "The city is known for its lively street markets and bustling ports."
      ],
      "options": [
        "Lagos",
        "Abuja",
        "Kano",
        "Ibadan"
      ]
    },
    {
      "city": "Algiers",
      "country": "Algeria",
      "clues": [
        "The capital city known for its whitewashed buildings and Mediterranean charm.",
        "A city that blends French colonial influences with North African heritage."
      ],
      "fun_fact": [
        "Algiers is often called 'Alger la Blanche' for its beautiful white architecture.",
        "The city has a rich history shaped by various civilizations."
      ],
      "trivia": [
        "Algiers features a mix of modern boulevards and ancient medinas.",
        "The city is a cultural center in North Africa with vibrant markets."
      ],
      "options": [
        "Algiers",
        "Oran",
        "Constantine",
        "Annaba"
      ]
    },
    {
      "city": "Tunis",
      "country": "Tunisia",
      "clues": [
        "A city rich in history, from ancient Carthage to modern times.",
        "Known for its medinas and vibrant souks."
      ],
      "fun_fact": [
        "Tunis's medina is a UNESCO World Heritage site.",
        "The city is a blend of Arab, Berber, and French influences."
      ],
      "trivia": [
        "Tunis is known for its lively marketplaces and rich culinary traditions.",
        "The city has a long history dating back to ancient civilizations."
      ],
      "options": [
        "Tunis",
        "Sfax",
        "Sousse",
        "Bizerte"
      ]
    },
    {
      "city": "Casablanca",
      "country": "Morocco",
      "clues": [
        "A bustling port city with a mix of modern and colonial architecture.",
        "Famous for its iconic film and vibrant economic scene."
      ],
      "fun_fact": [
        "Casablanca is the largest city in Morocco and a major economic hub.",
        "The city features a blend of art deco and modern design."
      ],
      "trivia": [
        "Casablanca's Hassan II Mosque is one of the largest in the world.",
        "The city has been a backdrop for many classic films."
      ],
      "options": [
        "Casablanca",
        "Marrakech",
        "Fez",
        "Rabat"
      ]
    },
    {
      "city": "Muscat",
      "country": "Oman",
      "clues": [
        "A coastal city known for its stunning mosques and natural harbors.",
        "A city that reflects the rich maritime heritage of Oman."
      ],
      "fun_fact": [
        "Muscat's Sultan Qaboos Grand Mosque is a marvel of modern Islamic architecture.",
        "The city is known for its pristine beaches and clear blue waters."
      ],
      "trivia": [
        "Muscat is celebrated for its traditional markets and ancient forts.",
        "The city offers a blend of modern luxury and cultural heritage."
      ],
      "options": [
        "Muscat",
        "Salalah",
        "Sohar",
        "Nizwa"
      ]
    },
    {
      "city": "Riyadh",
      "country": "Saudi Arabia",
      "clues": [
        "The capital city known for its modern skyscrapers and historic sites.",
        "A city that blends tradition with rapid modernization."
      ],
      "fun_fact": [
        "Riyadh is a major business hub in the Middle East.",
        "The city has undergone rapid transformation over the past few decades."
      ],
      "trivia": [
        "Riyadh hosts cultural festivals that showcase Saudi heritage.",
        "The city is known for its modern shopping malls and traditional souks."
      ],
      "options": [
        "Riyadh",
        "Jeddah",
        "Dammam",
        "Mecca"
      ]
    },
    {
      "city": "Jeddah",
      "country": "Saudi Arabia",
      "clues": [
        "A coastal city known for its historic old town and Red Sea views.",
        "A gateway for pilgrims heading to Mecca."
      ],
      "fun_fact": [
        "Jeddah is famous for its beautifully restored historical district, Al-Balad.",
        "The city is a major hub for trade and cultural exchange in the region."
      ],
      "trivia": [
        "Jeddah's waterfront is popular for leisure and dining.",
        "The city is known for its blend of modern and traditional architecture."
      ],
      "options": [
        "Jeddah",
        "Riyadh",
        "Dammam",
        "Medina"
      ]
    },
    {
      "city": "Kuwait City",
      "country": "Kuwait",
      "clues": [
        "The capital city known for its modern skyline and rich oil heritage.",
        "A city that has rapidly developed with impressive architecture."
      ],
      "fun_fact": [
        "Kuwait City is a major financial hub in the Middle East.",
        "The city is known for its vibrant cultural scene and luxury shopping."
      ],
      "trivia": [
        "Kuwait City features a mix of modern high-rises and traditional markets.",
        "The city has a rich history influenced by its maritime past."
      ],
      "options": [
        "Kuwait City",
        "Dubai",
        "Doha",
        "Manama"
      ]
    },
    {
      "city": "Lviv",
      "country": "Ukraine",
      "clues": [
        "A city renowned for its historic charm and vibrant cultural scene.",
        "Known for its cobblestone streets and eclectic architecture."
      ],
      "fun_fact": [
        "Lviv is famous for its well-preserved medieval core and coffee culture.",
        "The city has a rich history influenced by various European cultures."
      ],
      "trivia": [
        "Lviv hosts numerous festivals celebrating art, music, and literature.",
        "The city is often considered a cultural capital of Ukraine."
      ],
      "options": [
        "Lviv",
        "Kyiv",
        "Odessa",
        "Kharkiv"
      ]
    },
    {
      "city": "Kyiv",
      "country": "Ukraine",
      "clues": [
        "The capital of Ukraine, known for its historic churches and vibrant city life.",
        "A city with a rich history and dynamic modern culture."
      ],
      "fun_fact": [
        "Kyiv is one of the oldest cities in Eastern Europe, with a history dating back over 1,400 years.",
        "The city is renowned for its beautiful, golden-domed churches."
      ],
      "trivia": [
        "Kyiv's Maidan Nezalezhnosti is a symbol of Ukrainian resilience and unity.",
        "The city blends historic landmarks with contemporary urban energy."
      ],
      "options": [
        "Kyiv",
        "Lviv",
        "Dnipro",
        "Kharkiv"
      ]
    }
  ]


// const travel_dataset = [
//   {
//     "city": "Paris",
//     "country": "France",
//     "clues": [
//       "This city is home to a famous tower that sparkles every night.",
//       "Known as the 'City of Love' and a hub for fashion and art."
//     ],
//     "fun_fact": [
//       "The Eiffel Tower was supposed to be dismantled after 20 years but was saved because it was useful for radio transmissions!",
//       "Paris has only one stop sign in the entire city—most intersections rely on priority-to-the-right rules."
//     ],
//     "trivia": [
//       "This city is famous for its croissants and macarons. Bon appétit!",
//       "Paris was originally a Roman city called Lutetia."
//     ],
//     "options": [
//       "Berlin",
//       "Paris",
//       "Tokyo",
//       "London"
//     ]
//   },
//   {
//     "city": "Tokyo",
//     "country": "Japan",
//     "clues": [
//       "This city features the busiest pedestrian crossing in the world.",
//       "Famed for blending futuristic technology with traditional culture."
//     ],
//     "fun_fact": [
//       "Tokyo was once known as Edo before becoming the bustling metropolis it is today.",
//       "The city is home to over 150 museums showcasing art, history, and technology."
//     ],
//     "trivia": [
//       "Tokyo's subway system is known for its punctuality and efficiency.",
//       "The city hosts one of the world's largest annual cherry blossom festivals."
//     ],
//     "options": [
//       "Beijing",
//       "Seoul",
//       "Singapore",
//       "Tokyo"
//     ]
//   },
//   {
//     "city": "New York",
//     "country": "USA",
//     "clues": [
//       "Home to an iconic green statue gifted by France.",
//       "Nicknamed 'The Big Apple' with a vibrant theater district."
//     ],
//     "fun_fact": [
//       "Times Square attracts millions of visitors each year and is known for its dazzling billboards.",
//       "The city has a subway system that operates 24/7."
//     ],
//     "trivia": [
//       "New York City has its own designated zip code for the Empire State Building.",
//       "Central Park is larger than some small countries."
//     ],
//     "options": [
//       "Miami",
//       "New York",
//       "Los Angeles",
//       "Chicago"
//     ]
//   },
//   {
//     "city": "London",
//     "country": "United Kingdom",
//     "clues": [
//       "Famous for its historic clock tower and red double-decker buses.",
//       "A city steeped in history with royal palaces and modern landmarks."
//     ],
//     "fun_fact": [
//       "London is home to the oldest underground railway network in the world.",
//       "The city has over 170 museums, many of which offer free entry."
//     ],
//     "trivia": [
//       "The River Thames flows through the heart of London.",
//       "London hosted the Olympic Games in 2012."
//     ],
//     "options": [
//       "Dublin",
//       "Manchester",
//       "London",
//       "Edinburgh"
//     ]
//   },
//   {
//     "city": "Rome",
//     "country": "Italy",
//     "clues": [
//       "Known as the Eternal City with ancient ruins at every corner.",
//       "Home to the Vatican City and the Colosseum."
//     ],
//     "fun_fact": [
//       "Rome's history spans over two and a half thousand years.",
//       "The city is built on seven hills, each with its own historical significance."
//     ],
//     "trivia": [
//       "Fountains and public squares are central to Roman social life.",
//       "The Trevi Fountain tradition involves throwing coins for luck."
//     ],
//     "options": [
//       "Florence",
//       "Rome",
//       "Venice",
//       "Milan"
//     ]
//   },
//   {
//     "city": "Barcelona",
//     "country": "Spain",
//     "clues": [
//       "Famed for its unique architecture and the works of Gaudi.",
//       "A vibrant coastal city with bustling street life and art."
//     ],
//     "fun_fact": [
//       "The Sagrada Familia has been under construction for over a century.",
//       "Barcelona's street art scene is as dynamic as its modernist buildings."
//     ],
//     "trivia": [
//       "The city is a major center for football, home to one of the world's best teams.",
//       "Barcelona hosted the 1992 Summer Olympics, revitalizing its waterfront."
//     ],
//     "options": [
//       "Madrid",
//       "Seville",
//       "Barcelona",
//       "Valencia"
//     ]
//   },
//   {
//     "city": "Berlin",
//     "country": "Germany",
//     "clues": [
//       "Known for its rich history and vibrant arts scene.",
//       "A city where modern innovation meets historical landmarks."
//     ],
//     "fun_fact": [
//       "The Berlin Wall once divided the city but now stands as a canvas for street art.",
//       "Berlin is one of Europe's greenest cities with many parks and open spaces."
//     ],
//     "trivia": [
//       "Berlin is famous for its diverse nightlife and cultural festivals.",
//       "The city hosts the annual Berlin Marathon, attracting runners from around the world."
//     ],
//     "options": [
//       "Munich",
//       "Berlin",
//       "Frankfurt",
//       "Hamburg"
//     ]
//   },
//   {
//     "city": "Sydney",
//     "country": "Australia",
//     "clues": [
//       "Home to an iconic opera house with a unique architectural design.",
//       "Known for its beautiful harbor and vibrant coastal lifestyle."
//     ],
//     "fun_fact": [
//       "Sydney hosted the 2000 Summer Olympics, marking a milestone in its modern history.",
//       "The city is famous for its stunning beaches and outdoor lifestyle."
//     ],
//     "trivia": [
//       "Sydney's Harbour Bridge is one of the most photographed landmarks in Australia.",
//       "The city has a thriving arts scene and many annual cultural festivals."
//     ],
//     "options": [
//       "Brisbane",
//       "Sydney",
//       "Perth",
//       "Melbourne"
//     ]
//   },
//   {
//     "city": "Moscow",
//     "country": "Russia",
//     "clues": [
//       "Famous for its historic Red Square and the Kremlin.",
//       "A city that blends imperial history with modern advancements."
//     ],
//     "fun_fact": [
//       "Moscow is home to the world's largest metro system in terms of station size.",
//       "The city has some of the most ornate churches in the world, featuring vibrant domes."
//     ],
//     "trivia": [
//       "Moscow's metro stations are known for their grand, palatial designs.",
//       "The city spans 11 time zones across Russia."
//     ],
//     "options": [
//       "Kazan",
//       "Moscow",
//       "Novosibirsk",
//       "St. Petersburg"
//     ]
//   },
//   {
//     "city": "Dubai",
//     "country": "UAE",
//     "clues": [
//       "Known for its towering skyscrapers and luxurious lifestyle.",
//       "Home to the world's tallest building and extravagant shopping malls."
//     ],
//     "fun_fact": [
//       "Dubai transformed from a small trading port to a global city in just a few decades.",
//       "The city hosts man-made islands and indoor ski resorts."
//     ],
//     "trivia": [
//       "Dubai's Burj Khalifa stands as the tallest structure in the world.",
//       "The city is a major hub for international business and tourism."
//     ],
//     "options": [
//       "Doha",
//       "Dubai",
//       "Kuwait City",
//       "Abu Dhabi"
//     ]
//   },
//   {
//     "city": "Singapore",
//     "country": "Singapore",
//     "clues": [
//       "A city-state known for its cleanliness and efficient public transport.",
//       "A melting pot of cultures and a modern global financial hub."
//     ],
//     "fun_fact": [
//       "Singapore's Gardens by the Bay feature futuristic biodomes and supertrees.",
//       "Despite its size, the city has an impressive number of Michelin-starred restaurants."
//     ],
//     "trivia": [
//       "Singapore is one of the world's busiest ports, linking east and west.",
//       "The country is renowned for its strict laws and regulations ensuring order."
//     ],
//     "options": [
//       "Jakarta",
//       "Singapore",
//       "Bangkok",
//       "Kuala Lumpur"
//     ]
//   },
//   {
//     "city": "Hong Kong",
//     "country": "Hong Kong",
//     "clues": [
//       "Famous for its impressive skyline and bustling harbor.",
//       "A city where Eastern traditions meet Western influences."
//     ],
//     "fun_fact": [
//       "Hong Kong was a British colony until 1997, which influences its unique culture.",
//       "The city is home to one of the world's largest container ports."
//     ],
//     "trivia": [
//       "Hong Kong's Peak Tram offers breathtaking views of the city.",
//       "Dim sum is a staple of the city's culinary scene."
//     ],
//     "options": [
//       "Taipei",
//       "Tokyo",
//       "Hong Kong",
//       "Macau"
//     ]
//   },
//   {
//     "city": "Amsterdam",
//     "country": "Netherlands",
//     "clues": [
//       "Known for its network of canals and historic narrow houses.",
//       "A city famed for its cycling culture and vibrant arts scene."
//     ],
//     "fun_fact": [
//       "Amsterdam is built on over 100 islands, linked by bridges and tunnels.",
//       "The city has a rich history of trade and cultural exchange dating back to the 17th century."
//     ],
//     "trivia": [
//       "The Van Gogh Museum houses one of the largest collections of his paintings.",
//       "Bicycles outnumber people in this charming Dutch city."
//     ],
//     "options": [
//       "The Hague",
//       "Amsterdam",
//       "Utrecht",
//       "Rotterdam"
//     ]
//   },
//   {
//     "city": "Vienna",
//     "country": "Austria",
//     "clues": [
//       "Renowned for its classical music heritage and imperial palaces.",
//       "A city where coffee house culture meets grand architecture."
//     ],
//     "fun_fact": [
//       "Vienna was home to famous composers like Mozart and Beethoven.",
//       "The city hosts a famous New Year's Concert attended by millions globally."
//     ],
//     "trivia": [
//       "Vienna is known for its traditional waltz and vibrant cultural festivals.",
//       "The city has a long-standing tradition of elegant coffee house culture."
//     ],
//     "options": [
//       "Graz",
//       "Vienna",
//       "Innsbruck",
//       "Salzburg"
//     ]
//   },
//   {
//     "city": "Istanbul",
//     "country": "Turkey",
//     "clues": [
//       "A city that bridges two continents, Europe and Asia.",
//       "Famous for its historic bazaars and magnificent mosques."
//     ],
//     "fun_fact": [
//       "Istanbul was historically known as Byzantium and later Constantinople.",
//       "The city is a melting pot of cultures and cuisines."
//     ],
//     "trivia": [
//       "The Grand Bazaar in Istanbul is one of the largest and oldest covered markets in the world.",
//       "Istanbul has been the capital of three different empires."
//     ],
//     "options": [
//       "Izmir",
//       "Istanbul",
//       "Antalya",
//       "Ankara"
//     ]
//   },
//   {
//     "city": "Rio de Janeiro",
//     "country": "Brazil",
//     "clues": [
//       "Home to the iconic Christ the Redeemer statue overlooking the city.",
//       "Famed for its vibrant Carnival festival and lively beaches."
//     ],
//     "fun_fact": [
//       "Rio de Janeiro's Carnival is one of the largest street festivals in the world.",
//       "The city features unique landscapes combining mountains and ocean views."
//     ],
//     "trivia": [
//       "Rio's Copacabana and Ipanema beaches are internationally renowned.",
//       "The city's samba rhythm influences its lively cultural scene."
//     ],
//     "options": [
//       "Sao Paulo",
//       "Rio de Janeiro",
//       "Salvador",
//       "Brasilia"
//     ]
//   },
//   {
//     "city": "Los Angeles",
//     "country": "USA",
//     "clues": [
//       "Known as the heart of the entertainment industry.",
//       "Home to world-famous film studios and the Hollywood Walk of Fame."
//     ],
//     "fun_fact": [
//       "Los Angeles is the epicenter of the global film and television industry.",
//       "The city's diverse neighborhoods reflect a rich tapestry of cultures."
//     ],
//     "trivia": [
//       "The Santa Monica Pier is a landmark known for its amusement park and ocean views.",
//       "LA's traffic is legendary and often cited as a challenge for commuters."
//     ],
//     "options": [
//       "San Francisco",
//       "Las Vegas",
//       "Los Angeles",
//       "San Diego"
//     ]
//   },
//   {
//     "city": "Chicago",
//     "country": "USA",
//     "clues": [
//       "Famous for its deep-dish pizza and impressive skyline.",
//       "A city that played a pivotal role in the development of modern architecture."
//     ],
//     "fun_fact": [
//       "Chicago is home to one of the largest and most complex public transit systems in the USA.",
//       "The city hosts an annual air and water show on Lake Michigan."
//     ],
//     "trivia": [
//       "Chicago's architecture includes iconic skyscrapers and historic landmarks.",
//       "The city has a vibrant blues and jazz music scene."
//     ],
//     "options": [
//       "Houston",
//       "Chicago",
//       "Philadelphia",
//       "New York"
//     ]
//   },
//   {
//     "city": "Montreal",
//     "country": "Canada",
//     "clues": [
//       "Known for its French heritage and vibrant arts scene.",
//       "A city celebrated for its festivals and culinary diversity."
//     ],
//     "fun_fact": [
//       "Montreal hosts one of the largest jazz festivals in the world.",
//       "The city is home to underground cities connecting buildings during winter."
//     ],
//     "trivia": [
//       "Montreal's Old Port is a blend of history and modern entertainment.",
//       "The city is known for its bagels and poutine."
//     ],
//     "options": [
//       "Toronto",
//       "Montreal",
//       "Calgary",
//       "Vancouver"
//     ]
//   },
//   {
//     "city": "Mexico City",
//     "country": "Mexico",
//     "clues": [
//       "One of the largest cities in the world, rich in history and culture.",
//       "Home to ancient Aztec ruins and modern urban parks."
//     ],
//     "fun_fact": [
//       "Mexico City was built on the ruins of the Aztec capital Tenochtitlan.",
//       "The city boasts a vibrant street food scene celebrated globally."
//     ],
//     "trivia": [
//       "Mexico City is known for its colorful festivals and public art displays.",
//       "The city's historic center is a UNESCO World Heritage site."
//     ],
//     "options": [
//       "Monterrey",
//       "Cancun",
//       "Mexico City",
//       "Guadalajara"
//     ]
//   },
//   {
//     "city": "Mumbai",
//     "country": "India",
//     "clues": [
//       "The financial capital of India with a bustling film industry.",
//       "Home to the Bollywood film scene and busy markets."
//     ],
//     "fun_fact": [
//       "Mumbai is one of the most populous cities in the world.",
//       "The city features a mix of colonial architecture and modern skyscrapers."
//     ],
//     "trivia": [
//       "Mumbai's Gateway of India is a major tourist attraction.",
//       "The city is known for its vibrant street food and diverse culture."
//     ],
//     "options": [
//       "Delhi",
//       "Mumbai",
//       "Hyderabad",
//       "Bangalore"
//     ]
//   },
//   {
//     "city": "Shanghai",
//     "country": "China",
//     "clues": [
//       "A futuristic city known for its skyline and riverfront.",
//       "A major global financial center with rich cultural history."
//     ],
//     "fun_fact": [
//       "Shanghai's skyline features innovative skyscraper designs.",
//       "The city has a historic waterfront district known as The Bund."
//     ],
//     "trivia": [
//       "Shanghai is one of the world's busiest ports by container volume.",
//       "The city blends modern architecture with traditional Chinese heritage."
//     ],
//     "options": [
//       "Guangzhou",
//       "Shanghai",
//       "Shenzhen",
//       "Beijing"
//     ]
//   },
//   {
//     "city": "Beijing",
//     "country": "China",
//     "clues": [
//       "Home to the iconic Forbidden City and sprawling imperial palaces.",
//       "A city steeped in history with ancient temples and modern development."
//     ],
//     "fun_fact": [
//       "Beijing has hosted the Olympic Games and numerous international events.",
//       "The Great Wall of China, a symbol of ancient engineering, is nearby."
//     ],
//     "trivia": [
//       "Beijing is known for its Peking duck, a famous culinary delight.",
//       "The city features a mix of traditional hutongs and modern skyscrapers."
//     ],
//     "options": [
//       "Tianjin",
//       "Chengdu",
//       "Beijing",
//       "Shanghai"
//     ]
//   },
//   {
//     "city": "Seoul",
//     "country": "South Korea",
//     "clues": [
//       "A high-tech metropolis known for its pop culture and technology.",
//       "Home to historic palaces and modern skyscrapers."
//     ],
//     "fun_fact": [
//       "Seoul's rapid growth has turned it into a global technology hub.",
//       "The city offers a blend of ancient traditions and cutting-edge innovation."
//     ],
//     "trivia": [
//       "Seoul is famous for its street food markets and K-pop culture.",
//       "The city boasts one of the most connected public transit systems in Asia."
//     ],
//     "options": [
//       "Incheon",
//       "Busan",
//       "Seoul",
//       "Daegu"
//     ]
//   },
//   {
//     "city": "Bangkok",
//     "country": "Thailand",
//     "clues": [
//       "Known for its ornate temples and vibrant street life.",
//       "A city where traditional culture meets a bustling modern scene."
//     ],
//     "fun_fact": [
//       "Bangkok is famous for its delicious street food and lively markets.",
//       "The city has an extensive network of canals known as 'khlongs.'"
//     ],
//     "trivia": [
//       "Bangkok is one of Asia's most popular tourist destinations.",
//       "The city is home to the Grand Palace, a symbol of Thai heritage."
//     ],
//     "options": [
//       "Phuket",
//       "Bangkok",
//       "Pattaya",
//       "Chiang Mai"
//     ]
//   },
//   {
//     "city": "Buenos Aires",
//     "country": "Argentina",
//     "clues": [
//       "A city known for its European-style architecture and tango music.",
//       "Often called the 'Paris of South America' due to its vibrant cultural scene."
//     ],
//     "fun_fact": [
//       "Buenos Aires is the birthplace of tango, a passionate dance form.",
//       "The city's neighborhoods, like La Boca, are filled with colorful art and history."
//     ],
//     "trivia": [
//       "Buenos Aires hosts numerous festivals celebrating music and dance.",
//       "The city is known for its steak and culinary traditions."
//     ],
//     "options": [
//       "Cordoba",
//       "Buenos Aires",
//       "Mendoza",
//       "Rosario"
//     ]
//   },
//   {
//     "city": "Cape Town",
//     "country": "South Africa",
//     "clues": [
//       "Known for its stunning coastal views and Table Mountain.",
//       "A city where natural beauty meets rich cultural diversity."
//     ],
//     "fun_fact": [
//       "Cape Town is renowned for its dramatic landscapes and scenic drives.",
//       "The city is a gateway to some of Africa's most beautiful natural reserves."
//     ],
//     "trivia": [
//       "Cape Town's waterfront offers a blend of shopping, dining, and history.",
//       "The city is celebrated for its wineries and culinary scene."
//     ],
//     "options": [
//       "Johannesburg",
//       "Pretoria",
//       "Cape Town",
//       "Durban"
//     ]
//   },
//   {
//     "city": "Cairo",
//     "country": "Egypt",
//     "clues": [
//       "Famous for its ancient pyramids and the nearby Sphinx.",
//       "A city steeped in millennia of history along the Nile River."
//     ],
//     "fun_fact": [
//       "Cairo is often referred to as 'The City of a Thousand Minarets' for its historic mosques.",
//       "The Egyptian Museum in Cairo houses treasures from ancient pharaohs."
//     ],
//     "trivia": [
//       "Cairo's bustling bazaars offer a glimpse into its rich cultural heritage.",
//       "The city is a hub for both modern culture and ancient history."
//     ],
//     "options": [
//       "Giza",
//       "Cairo",
//       "Luxor",
//       "Alexandria"
//     ]
//   },
//   {
//     "city": "Lisbon",
//     "country": "Portugal",
//     "clues": [
//       "A coastal city known for its picturesque hills and tram rides.",
//       "Famous for its vibrant neighborhoods and historic architecture."
//     ],
//     "fun_fact": [
//       "Lisbon is one of the oldest cities in Europe, with a history dating back to ancient times.",
//       "The city is known for its traditional Fado music."
//     ],
//     "trivia": [
//       "Lisbon's pastel-colored buildings add to its charm.",
//       "The city is built on seven hills, offering stunning viewpoints."
//     ],
//     "options": [
//       "Coimbra",
//       "Faro",
//       "Lisbon",
//       "Porto"
//     ]
//   },
//   {
//     "city": "Prague",
//     "country": "Czech Republic",
//     "clues": [
//       "Known as 'The City of a Hundred Spires' due to its beautiful architecture.",
//       "A city with a rich history and a well-preserved medieval center."
//     ],
//     "fun_fact": [
//       "Prague is famous for its astronomical clock dating back to the 15th century.",
//       "The city has inspired many writers and artists with its enchanting charm."
//     ],
//     "trivia": [
//       "Prague's Charles Bridge is a historic landmark connecting the old town with the castle district.",
//       "The city is celebrated for its traditional Czech beer."
//     ],
//     "options": [
//       "Plzen",
//       "Brno",
//       "Prague",
//       "Ostrava"
//     ]
//   },
//   {
//     "city": "Dublin",
//     "country": "Ireland",
//     "clues": [
//       "A city known for its literary history and friendly pubs.",
//       "Home to historic landmarks and vibrant street culture."
//     ],
//     "fun_fact": [
//       "Dublin is famous for its literary giants like James Joyce and W.B. Yeats.",
//       "The city hosts an annual St. Patrick's Day parade drawing crowds from around the world."
//     ],
//     "trivia": [
//       "Dublin's Trinity College houses the ancient Book of Kells.",
//       "The city's vibrant music scene is celebrated in its many pubs."
//     ],
//     "options": [
//       "Galway",
//       "Dublin",
//       "Limerick",
//       "Cork"
//     ]
//   },
//   {
//     "city": "Edinburgh",
//     "country": "United Kingdom",
//     "clues": [
//       "A city known for its historic castle and annual festivals.",
//       "The capital of Scotland, rich in literary and cultural heritage."
//     ],
//     "fun_fact": [
//       "Edinburgh hosts the famous Fringe Festival, the world's largest arts festival.",
//       "The city's Royal Mile is lined with historic sites and cobblestone streets."
//     ],
//     "trivia": [
//       "Edinburgh's Old Town and New Town are UNESCO World Heritage sites.",
//       "The city has inspired many writers and filmmakers over the years."
//     ],
//     "options": [
//       "Dundee",
//       "Edinburgh",
//       "Aberdeen",
//       "Glasgow"
//     ]
//   },
//   {
//     "city": "Stockholm",
//     "country": "Sweden",
//     "clues": [
//       "A city spread across numerous islands connected by bridges.",
//       "Known for its blend of modern design and historic architecture."
//     ],
//     "fun_fact": [
//       "Stockholm's Gamla Stan is one of the best-preserved medieval city centers in Europe.",
//       "The city is a leader in environmental sustainability and design."
//     ],
//     "trivia": [
//       "Stockholm is home to several world-class museums, including the Vasa Museum.",
//       "The city has a reputation for innovative technology and startups."
//     ],
//     "options": [
//       "Uppsala",
//       "Stockholm",
//       "Gothenburg",
//       "Malmo"
//     ]
//   },
//   {
//     "city": "Oslo",
//     "country": "Norway",
//     "clues": [
//       "Nestled among forests and hills, offering stunning fjord views.",
//       "A city known for its rich maritime history and modern sculptures."
//     ],
//     "fun_fact": [
//       "Oslo is one of the greenest cities in Europe with numerous parks and outdoor spaces.",
//       "The city hosts the famous Vigeland Sculpture Park, featuring over 200 sculptures."
//     ],
//     "trivia": [
//       "Oslo's waterfront is a blend of modern architecture and historical ships.",
//       "The city is a gateway to Norway's natural beauty."
//     ],
//     "options": [
//       "Trondheim",
//       "Oslo",
//       "Bergen",
//       "Stavanger"
//     ]
//   },
//   {
//     "city": "Helsinki",
//     "country": "Finland",
//     "clues": [
//       "A coastal city known for its design and innovative architecture.",
//       "A city that blends modern urban life with deep-rooted traditions."
//     ],
//     "fun_fact": [
//       "Helsinki has been recognized as a design capital of the world.",
//       "The city hosts an annual festival celebrating Finnish culture and music."
//     ],
//     "trivia": [
//       "Helsinki's islands and parks provide a peaceful escape within the city.",
//       "The city's sauna culture is an integral part of Finnish life."
//     ],
//     "options": [
//       "Oulu",
//       "Helsinki",
//       "Tampere",
//       "Turku"
//     ]
//   },
//   {
//     "city": "Copenhagen",
//     "country": "Denmark",
//     "clues": [
//       "A city famous for its historic center and modern culinary scene.",
//       "Home to the iconic statue of The Little Mermaid."
//     ],
//     "fun_fact": [
//       "Copenhagen is known for its bike-friendly streets and sustainable living.",
//       "The city boasts numerous Michelin-starred restaurants."
//     ],
//     "trivia": [
//       "Copenhagen's Tivoli Gardens is one of the world's oldest amusement parks.",
//       "The city has a rich history dating back to the Vikings."
//     ],
//     "options": [
//       "Odense",
//       "Copenhagen",
//       "Aarhus",
//       "Aalborg"
//     ]
//   },
//   {
//     "city": "Zurich",
//     "country": "Switzerland",
//     "clues": [
//       "A financial hub set beside a picturesque lake and mountain views.",
//       "Known for its high quality of life and efficient public services."
//     ],
//     "fun_fact": [
//       "Zurich is consistently ranked among the world's most livable cities.",
//       "The city is home to a variety of museums and historic sites."
//     ],
//     "trivia": [
//       "Zurich's old town is a charming maze of narrow lanes and medieval buildings.",
//       "The city is a major center for banking and finance."
//     ],
//     "options": [
//       "Geneva",
//       "Bern",
//       "Zurich",
//       "Basel"
//     ]
//   },
//   {
//     "city": "Geneva",
//     "country": "Switzerland",
//     "clues": [
//       "Known for its international organizations and diplomatic history.",
//       "A city set along the shores of a stunning lake with views of the Alps."
//     ],
//     "fun_fact": [
//       "Geneva is home to numerous international agencies including the UN and WHO.",
//       "The city has a rich history of humanitarian efforts and peace negotiations."
//     ],
//     "trivia": [
//       "Geneva's Jet d'Eau is one of the tallest water fountains in the world.",
//       "The city is famous for its luxury watches and chocolate."
//     ],
//     "options": [
//       "Lucerne",
//       "Geneva",
//       "Lausanne",
//       "Zurich"
//     ]
//   },
//   {
//     "city": "Brussels",
//     "country": "Belgium",
//     "clues": [
//       "The administrative heart of the European Union.",
//       "Known for its comic art, chocolates, and iconic Atomium structure."
//     ],
//     "fun_fact": [
//       "Brussels is famous for its delicious waffles and beer.",
//       "The city has a rich history of art and architecture dating back centuries."
//     ],
//     "trivia": [
//       "Brussels hosts many international conferences and diplomatic meetings.",
//       "The city is renowned for its blend of modern and classical architecture."
//     ],
//     "options": [
//       "Antwerp",
//       "Brussels",
//       "Bruges",
//       "Ghent"
//     ]
//   },
//   {
//     "city": "Athens",
//     "country": "Greece",
//     "clues": [
//       "A city known as the cradle of Western civilization.",
//       "Home to ancient ruins including the Acropolis and Parthenon."
//     ],
//     "fun_fact": [
//       "Athens has been continuously inhabited for over 3,000 years.",
//       "The city offers a mix of ancient history and modern culture."
//     ],
//     "trivia": [
//       "Athens is famous for its contributions to art, philosophy, and democracy.",
//       "The city hosts lively street markets and modern cafes."
//     ],
//     "options": [
//       "Heraklion",
//       "Athens",
//       "Patras",
//       "Thessaloniki"
//     ]
//   },
//   {
//     "city": "Budapest",
//     "country": "Hungary",
//     "clues": [
//       "A city split by the Danube River into two distinct parts.",
//       "Renowned for its thermal baths and stunning architecture."
//     ],
//     "fun_fact": [
//       "Budapest is often called the 'Pearl of the Danube' due to its beauty.",
//       "The city has one of the largest thermal bath complexes in Europe."
//     ],
//     "trivia": [
//       "Budapest's Parliament building is one of the largest in the world.",
//       "The city is famous for its ruin bars and vibrant nightlife."
//     ],
//     "options": [
//       "Miskolc",
//       "Budapest",
//       "Szeged",
//       "Debrecen"
//     ]
//   },
//   {
//     "city": "Warsaw",
//     "country": "Poland",
//     "clues": [
//       "A city rebuilt from ruins with a rich history of resilience.",
//       "Known for its modern skyline alongside historic Old Town."
//     ],
//     "fun_fact": [
//       "Warsaw's Old Town is a UNESCO World Heritage site.",
//       "The city was almost entirely rebuilt after World War II."
//     ],
//     "trivia": [
//       "Warsaw is a cultural hub with numerous theaters and museums.",
//       "The city blends modern architecture with historical landmarks."
//     ],
//     "options": [
//       "Gdansk",
//       "Poznan",
//       "Warsaw",
//       "Krakow"
//     ]
//   },
//   {
//     "city": "Krakow",
//     "country": "Poland",
//     "clues": [
//       "A city renowned for its well-preserved medieval core.",
//       "Home to the historic Wawel Castle and vibrant cultural scene."
//     ],
//     "fun_fact": [
//       "Krakow was once the capital of Poland and remains a cultural center.",
//       "The city hosts numerous festivals celebrating art and history."
//     ],
//     "trivia": [
//       "Krakow's Main Market Square is one of the largest medieval town squares in Europe.",
//       "The city has a rich tradition of folklore and craftsmanship."
//     ],
//     "options": [
//       "Wroclaw",
//       "Krakow",
//       "Lodz",
//       "Warsaw"
//     ]
//   },
//   {
//     "city": "Munich",
//     "country": "Germany",
//     "clues": [
//       "Famous for its annual beer festival and rich Bavarian traditions.",
//       "A city where modern industry meets historical charm."
//     ],
//     "fun_fact": [
//       "Munich is home to the Oktoberfest, the world's largest beer festival.",
//       "The city boasts impressive museums and art galleries."
//     ],
//     "trivia": [
//       "Munich's Marienplatz is a bustling square at the heart of the city.",
//       "The city is known for its blend of modern and traditional architecture."
//     ],
//     "options": [
//       "Frankfurt",
//       "Berlin",
//       "Munich",
//       "Hamburg"
//     ]
//   },
//   {
//     "city": "Frankfurt",
//     "country": "Germany",
//     "clues": [
//       "A global financial center with a striking skyline.",
//       "Known for its trade fairs and rich commercial history."
//     ],
//     "fun_fact": [
//       "Frankfurt is home to the European Central Bank.",
//       "The city blends modern skyscrapers with historic Römer square."
//     ],
//     "trivia": [
//       "Frankfurt hosts one of the world's largest book fairs annually.",
//       "The city is a major transportation hub in Europe."
//     ],
//     "options": [
//       "Stuttgart",
//       "Cologne",
//       "Frankfurt",
//       "Munich"
//     ]
//   },
//   {
//     "city": "Sao Paulo",
//     "country": "Brazil",
//     "clues": [
//       "A sprawling metropolis known for its cultural diversity.",
//       "The largest city in Brazil and a major economic hub."
//     ],
//     "fun_fact": [
//       "Sao Paulo is famous for its vibrant art scene and street art.",
//       "The city hosts numerous festivals celebrating its diverse heritage."
//     ],
//     "trivia": [
//       "Sao Paulo is one of the most populous cities in the Americas.",
//       "The city's architecture ranges from colonial to ultra-modern."
//     ],
//     "options": [
//       "Curitiba",
//       "Rio de Janeiro",
//       "Sao Paulo",
//       "Belo Horizonte"
//     ]
//   },
//   {
//     "city": "Bogota",
//     "country": "Colombia",
//     "clues": [
//       "A high-altitude city known for its vibrant street art and culture.",
//       "Home to historic neighborhoods and modern urban life."
//     ],
//     "fun_fact": [
//       "Bogota is located on a high plateau in the Andes mountains.",
//       "The city has a dynamic art scene and numerous cultural festivals."
//     ],
//     "trivia": [
//       "Bogota's Gold Museum houses one of the largest collections of pre-Columbian gold artifacts.",
//       "The city is known for its diverse culinary offerings."
//     ],
//     "options": [
//       "Cali",
//       "Medellin",
//       "Bogota",
//       "Cartagena"
//     ]
//   },
//   {
//     "city": "Lima",
//     "country": "Peru",
//     "clues": [
//       "A coastal capital known for its rich culinary traditions.",
//       "Home to ancient ruins and modern urban flair."
//     ],
//     "fun_fact": [
//       "Lima was the center of the Spanish Viceroyalty in South America.",
//       "The city is famous for its fusion of indigenous and Spanish cuisine."
//     ],
//     "trivia": [
//       "Lima's historic center is a UNESCO World Heritage site.",
//       "The city is known for its ceviche and vibrant street markets."
//     ],
//     "options": [
//       "Arequipa",
//       "Lima",
//       "Cusco",
//       "Trujillo"
//     ]
//   },
//   {
//     "city": "Santiago",
//     "country": "Chile",
//     "clues": [
//       "Nestled between the Andes and the Pacific, offering stunning mountain views.",
//       "A city that blends modernity with rich cultural traditions."
//     ],
//     "fun_fact": [
//       "Santiago is Chile's largest city and a major cultural center.",
//       "The city is known for its dynamic art scene and historical neighborhoods."
//     ],
//     "trivia": [
//       "Santiago's central market is famous for fresh produce and local cuisine.",
//       "The city is a gateway to nearby vineyards and ski resorts."
//     ],
//     "options": [
//       "La Serena",
//       "Santiago",
//       "Concepcion",
//       "Valparaiso"
//     ]
//   },
//   {
//     "city": "Auckland",
//     "country": "New Zealand",
//     "clues": [
//       "A vibrant city known for its scenic harbor and multicultural community.",
//       "A gateway to numerous islands and outdoor adventures."
//     ],
//     "fun_fact": [
//       "Auckland is often called the 'City of Sails' due to its active boating culture.",
//       "The city has a diverse cultural scene and hosts many festivals."
//     ],
//     "trivia": [
//       "Auckland's skyline is dominated by the iconic Sky Tower.",
//       "The city offers stunning views of the surrounding volcanic landscape."
//     ],
//     "options": [
//       "Christchurch",
//       "Auckland",
//       "Hamilton",
//       "Wellington"
//     ]
//   },
//   {
//     "city": "Wellington",
//     "country": "New Zealand",
//     "clues": [
//       "The capital of New Zealand, known for its creative arts scene.",
//       "A city nestled between a harbor and rolling hills."
//     ],
//     "fun_fact": [
//       "Wellington is renowned for its film industry and vibrant coffee culture.",
//       "The city has a compact downtown filled with theaters and galleries."
//     ],
//     "trivia": [
//       "Wellington is often referred to as 'Windy Welly' due to its breezy conditions.",
//       "The city's harbor offers picturesque views and outdoor activities."
//     ],
//     "options": [
//       "Queenstown",
//       "Wellington",
//       "Dunedin",
//       "Auckland"
//     ]
//   },
//   {
//     "city": "Reykjavik",
//     "country": "Iceland",
//     "clues": [
//       "The world's northernmost capital, known for its modern design and natural beauty.",
//       "A city that serves as a gateway to Iceland's unique landscapes."
//     ],
//     "fun_fact": [
//       "Reykjavik is known for its colorful buildings and innovative architecture.",
//       "The city has a vibrant music scene and hosts numerous festivals."
//     ],
//     "trivia": [
//       "Reykjavik is a starting point for exploring Iceland's geothermal wonders.",
//       "The city is famous for its midnight sun and northern lights."
//     ],
//     "options": [
//       "Akureyri",
//       "Reykjavik",
//       "Selfoss",
//       "Keflavik"
//     ]
//   },
//   {
//     "city": "Tallinn",
//     "country": "Estonia",
//     "clues": [
//       "A medieval city known for its well-preserved old town.",
//       "Famous for its blend of history and modern digital innovation."
//     ],
//     "fun_fact": [
//       "Tallinn's old town is a UNESCO World Heritage site.",
//       "The city is a leader in digital governance and e-residency programs."
//     ],
//     "trivia": [
//       "Tallinn is known for its charming cobblestone streets and historic buildings.",
//       "The city hosts many tech startups and innovative enterprises."
//     ],
//     "options": [
//       "Narva",
//       "Tallinn",
//       "Parnu",
//       "Tartu"
//     ]
//   },
//   {
//     "city": "Riga",
//     "country": "Latvia",
//     "clues": [
//       "A city known for its art nouveau architecture and lively cultural scene.",
//       "The capital of Latvia, blending historical charm with modern flair."
//     ],
//     "fun_fact": [
//       "Riga's architecture includes some of the finest examples of art nouveau in Europe.",
//       "The city hosts a variety of music and arts festivals throughout the year."
//     ],
//     "trivia": [
//       "Riga's central market is one of the largest in Europe, housed in old Zeppelin hangars.",
//       "The city is known for its vibrant street art and creative spaces."
//     ],
//     "options": [
//       "Liepaja",
//       "Riga",
//       "Jelgava",
//       "Daugavpils"
//     ]
//   },
//   {
//     "city": "Vilnius",
//     "country": "Lithuania",
//     "clues": [
//       "A city with a rich history and a charming old town.",
//       "Known for its baroque architecture and artistic heritage."
//     ],
//     "fun_fact": [
//       "Vilnius has one of the largest preserved medieval old towns in Eastern Europe.",
//       "The city is a center for arts and cultural festivals."
//     ],
//     "trivia": [
//       "Vilnius is known for its quirky street art and vibrant cafe culture.",
//       "The city played an important role in the history of the Grand Duchy of Lithuania."
//     ],
//     "options": [
//       "Siauliai",
//       "Vilnius",
//       "Klaipeda",
//       "Kaunas"
//     ]
//   },
//   {
//     "city": "Bratislava",
//     "country": "Slovakia",
//     "clues": [
//       "A city nestled on the banks of the Danube with a charming old town.",
//       "Known for its medieval castle overlooking modern developments."
//     ],
//     "fun_fact": [
//       "Bratislava's castle offers panoramic views of the surrounding countryside.",
//       "The city has a unique mix of old-world charm and contemporary style."
//     ],
//     "trivia": [
//       "Bratislava is a cultural hub with numerous festivals and events.",
//       "The city is known for its vibrant street life and historic bridges."
//     ],
//     "options": [
//       "Trnava",
//       "Bratislava",
//       "Kosice",
//       "Nitra"
//     ]
//   },
//   {
//     "city": "Belgrade",
//     "country": "Serbia",
//     "clues": [
//       "A city with a rich history and a lively riverfront.",
//       "Known for its vibrant nightlife and historic fortresses."
//     ],
//     "fun_fact": [
//       "Belgrade is one of the oldest cities in Europe, with history spanning millennia.",
//       "The city sits at the confluence of the Danube and Sava rivers."
//     ],
//     "trivia": [
//       "Belgrade is famous for its bohemian quarter and cultural festivals.",
//       "The city's historic Kalemegdan fortress is a major tourist attraction."
//     ],
//     "options": [
//       "Nis",
//       "Belgrade",
//       "Kragujevac",
//       "Novi Sad"
//     ]
//   },
//   {
//     "city": "Bucharest",
//     "country": "Romania",
//     "clues": [
//       "The capital of Romania, known for its wide avenues and eclectic architecture.",
//       "A city that blends communist-era buildings with modern structures."
//     ],
//     "fun_fact": [
//       "Bucharest is nicknamed 'Little Paris' due to its elegant architecture.",
//       "The city hosts a vibrant arts and cultural scene."
//     ],
//     "trivia": [
//       "Bucharest's Palace of the Parliament is one of the largest administrative buildings in the world.",
//       "The city has a rich history and diverse cultural influences."
//     ],
//     "options": [
//       "Timisoara",
//       "Bucharest",
//       "Iasi",
//       "Cluj-Napoca"
//     ]
//   },
//   {
//     "city": "Sofia",
//     "country": "Bulgaria",
//     "clues": [
//       "A city with a mix of ancient history and modern living.",
//       "Known for its scenic mountain backdrop and historic churches."
//     ],
//     "fun_fact": [
//       "Sofia is one of the oldest cities in Europe, with evidence of habitation dating back thousands of years.",
//       "The city has a blend of Roman, Ottoman, and Soviet influences."
//     ],
//     "trivia": [
//       "Sofia's Boyana Church is a UNESCO World Heritage site.",
//       "The city is known for its vibrant street art and cafe culture."
//     ],
//     "options": [
//       "Varna",
//       "Burgas",
//       "Sofia",
//       "Plovdiv"
//     ]
//   },
//   {
//     "city": "Minsk",
//     "country": "Belarus",
//     "clues": [
//       "The capital of Belarus, known for its Soviet-era architecture.",
//       "A city that has rebuilt itself with modern landmarks after historic events."
//     ],
//     "fun_fact": [
//       "Minsk is known for its wide boulevards and impressive public squares.",
//       "The city hosts several annual festivals celebrating its culture."
//     ],
//     "trivia": [
//       "Minsk's museums showcase its rich history and cultural heritage.",
//       "The city is a center for performing arts in Belarus."
//     ],
//     "options": [
//       "Brest",
//       "Minsk",
//       "Vitebsk",
//       "Gomel"
//     ]
//   },
//   {
//     "city": "Abu Dhabi",
//     "country": "UAE",
//     "clues": [
//       "A modern city known for its luxurious architecture and cultural landmarks.",
//       "Home to magnificent mosques and world-class museums."
//     ],
//     "fun_fact": [
//       "Abu Dhabi hosts the stunning Sheikh Zayed Grand Mosque.",
//       "The city has invested heavily in sustainable urban development."
//     ],
//     "trivia": [
//       "Abu Dhabi is a major hub for art and culture in the Middle East.",
//       "The city blends traditional Arabian culture with futuristic design."
//     ],
//     "options": [
//       "Doha",
//       "Abu Dhabi",
//       "Muscat",
//       "Dubai"
//     ]
//   },
//   {
//     "city": "Doha",
//     "country": "Qatar",
//     "clues": [
//       "A rapidly developing city with a futuristic skyline.",
//       "Known for its cultural museums and desert landscapes."
//     ],
//     "fun_fact": [
//       "Doha is home to the Museum of Islamic Art, an architectural masterpiece.",
//       "The city has hosted numerous international sporting events."
//     ],
//     "trivia": [
//       "Doha's Corniche offers stunning views of the Persian Gulf.",
//       "The city is a hub for commerce and cultural exchange in the region."
//     ],
//     "options": [
//       "Abu Dhabi",
//       "Doha",
//       "Manama",
//       "Riyadh"
//     ]
//   },
//   {
//     "city": "Beirut",
//     "country": "Lebanon",
//     "clues": [
//       "Known for its vibrant nightlife and rich cultural history.",
//       "A city that has rebuilt itself with resilience and creativity."
//     ],
//     "fun_fact": [
//       "Beirut is often called the 'Paris of the Middle East' for its charm.",
//       "The city has a history that spans thousands of years."
//     ],
//     "trivia": [
//       "Beirut's culinary scene is a blend of Mediterranean flavors and local traditions.",
//       "The city is known for its art galleries and lively music festivals."
//     ],
//     "options": [
//       "Sidon",
//       "Beirut",
//       "Tripoli",
//       "Tyre"
//     ]
//   },
//   {
//     "city": "Amman",
//     "country": "Jordan",
//     "clues": [
//       "The capital of Jordan, blending ancient history with modernity.",
//       "A city known for its bustling souks and archaeological sites."
//     ],
//     "fun_fact": [
//       "Amman has grown rapidly from a small town to a modern metropolis.",
//       "The city is a gateway to ancient sites like Petra and Jerash."
//     ],
//     "trivia": [
//       "Amman offers a mix of traditional Middle Eastern cuisine and modern dining.",
//       "The city's citadel overlooks a panorama of historic ruins."
//     ],
//     "options": [
//       "Zarqa",
//       "Amman",
//       "Irbid",
//       "Aqaba"
//     ]
//   },
//   {
//     "city": "Tel Aviv",
//     "country": "Israel",
//     "clues": [
//       "A vibrant coastal city known for its nightlife and beaches.",
//       "Renowned for its modern architecture and startup culture."
//     ],
//     "fun_fact": [
//       "Tel Aviv is often dubbed the 'Silicon Wadi' due to its thriving tech scene.",
//       "The city never sleeps, with bustling markets and cultural events around the clock."
//     ],
//     "trivia": [
//       "Tel Aviv's promenade is popular for leisurely walks and stunning sea views.",
//       "The city has a rich history that contrasts with its modern vibrancy."
//     ],
//     "options": [
//       "Haifa",
//       "Tel Aviv",
//       "Eilat",
//       "Jerusalem"
//     ]
//   },
//   {
//     "city": "Karachi",
//     "country": "Pakistan",
//     "clues": [
//       "The largest city in Pakistan and a major economic hub.",
//       "Known for its bustling ports and diverse cultural scene."
//     ],
//     "fun_fact": [
//       "Karachi is one of the world's most populous cities with a rich maritime history.",
//       "The city has a vibrant arts and culinary scene reflecting its diverse population."
//     ],
//     "trivia": [
//       "Karachi is home to historic bazaars and modern shopping districts.",
//       "The city plays a pivotal role in Pakistan's economy and trade."
//     ],
//     "options": [
//       "Faisalabad",
//       "Islamabad",
//       "Lahore",
//       "Karachi"
//     ]
//   },
//   {
//     "city": "Colombo",
//     "country": "Sri Lanka",
//     "clues": [
//       "The capital city known for its colonial architecture and tropical charm.",
//       "A vibrant city blending modernity with historic influences."
//     ],
//     "fun_fact": [
//       "Colombo's streets reflect a mix of Portuguese, Dutch, and British architectural styles.",
//       "The city is a major economic hub in South Asia."
//     ],
//     "trivia": [
//       "Colombo is famous for its bustling markets and seaside promenade.",
//       "The city hosts numerous cultural festivals throughout the year."
//     ],
//     "options": [
//       "Kandy",
//       "Colombo",
//       "Jaffna",
//       "Galle"
//     ]
//   },
//   {
//     "city": "Kathmandu",
//     "country": "Nepal",
//     "clues": [
//       "A city nestled in a valley and gateway to the Himalayas.",
//       "Known for its ancient temples and vibrant street life."
//     ],
//     "fun_fact": [
//       "Kathmandu's Durbar Square is a UNESCO World Heritage site.",
//       "The city is steeped in traditions and rich in cultural heritage."
//     ],
//     "trivia": [
//       "Kathmandu is famous for its intricate wood carvings and historic pagodas.",
//       "The city offers stunning views of surrounding mountain peaks."
//     ],
//     "options": [
//       "Lukla",
//       "Kathmandu",
//       "Biratnagar",
//       "Pokhara"
//     ]
//   },
//   {
//     "city": "Hanoi",
//     "country": "Vietnam",
//     "clues": [
//       "A city known for its centuries-old architecture and rich cultural heritage.",
//       "Home to bustling markets and serene lakes."
//     ],
//     "fun_fact": [
//       "Hanoi's Old Quarter is a maze of narrow streets with a rich history.",
//       "The city is renowned for its traditional Vietnamese cuisine."
//     ],
//     "trivia": [
//       "Hanoi is known for its vibrant street food culture and local coffee shops.",
//       "The city has numerous lakes and parks that provide a refreshing escape."
//     ],
//     "options": [
//       "Da Nang",
//       "Hanoi",
//       "Hue",
//       "Ho Chi Minh City"
//     ]
//   },
//   {
//     "city": "Ho Chi Minh City",
//     "country": "Vietnam",
//     "clues": [
//       "A bustling metropolis known for its rapid growth and dynamic energy.",
//       "A city that blends traditional markets with modern skyscrapers."
//     ],
//     "fun_fact": [
//       "Ho Chi Minh City was formerly known as Saigon.",
//       "The city is a major economic center in Vietnam with a vibrant street life."
//     ],
//     "trivia": [
//       "The city is famous for its flavorful street food and night markets.",
//       "Ho Chi Minh City played a crucial role in modern Vietnamese history."
//     ],
//     "options": [
//       "Can Tho",
//       "Nha Trang",
//       "Hanoi",
//       "Ho Chi Minh City"
//     ]
//   },
//   {
//     "city": "Manila",
//     "country": "Philippines",
//     "clues": [
//       "A bustling city that serves as the heart of the Philippines.",
//       "Known for its historic walled city and vibrant street life."
//     ],
//     "fun_fact": [
//       "Manila was once a key hub in the Spanish colonial empire.",
//       "The city is famous for its colorful festivals and lively markets."
//     ],
//     "trivia": [
//       "Manila's Intramuros is a historic district that tells the story of its colonial past.",
//       "The city is a melting pot of cultures and modern influences."
//     ],
//     "options": [
//       "Davao",
//       "Cebu",
//       "Manila",
//       "Baguio"
//     ]
//   },
//   {
//     "city": "Jakarta",
//     "country": "Indonesia",
//     "clues": [
//       "A sprawling metropolis known for its bustling markets and vibrant street life.",
//       "The capital city with a mix of modern skyscrapers and colonial heritage."
//     ],
//     "fun_fact": [
//       "Jakarta is one of the most populous cities in Southeast Asia.",
//       "The city has a rich cultural heritage influenced by various civilizations."
//     ],
//     "trivia": [
//       "Jakarta is known for its dynamic arts scene and culinary diversity.",
//       "The city hosts numerous festivals that celebrate its multicultural background."
//     ],
//     "options": [
//       "Bandung",
//       "Medan",
//       "Surabaya",
//       "Jakarta"
//     ]
//   },
//   {
//     "city": "Kuala Lumpur",
//     "country": "Malaysia",
//     "clues": [
//       "Famous for its iconic twin towers and multicultural heritage.",
//       "A modern city with a blend of traditional markets and skyscrapers."
//     ],
//     "fun_fact": [
//       "Kuala Lumpur's Petronas Towers were the tallest buildings in the world at one point.",
//       "The city is a melting pot of Malay, Chinese, and Indian cultures."
//     ],
//     "trivia": [
//       "Kuala Lumpur is known for its vibrant street food and night markets.",
//       "The city offers a unique blend of modernity and tradition."
//     ],
//     "options": [
//       "Ipoh",
//       "Kuala Lumpur",
//       "Malacca",
//       "George Town"
//     ]
//   },
//   {
//     "city": "Perth",
//     "country": "Australia",
//     "clues": [
//       "A sun-soaked city known for its beaches and laid-back lifestyle.",
//       "Located on the western coast of Australia with a thriving cultural scene."
//     ],
//     "fun_fact": [
//       "Perth is one of the most isolated major cities in the world.",
//       "The city is known for its outdoor festivals and scenic riverfront."
//     ],
//     "trivia": [
//       "Perth's beaches are popular for surfing and sunbathing.",
//       "The city offers a blend of modern amenities and natural beauty."
//     ],
//     "options": [
//       "Adelaide",
//       "Melbourne",
//       "Sydney",
//       "Perth"
//     ]
//   },
//   {
//     "city": "Adelaide",
//     "country": "Australia",
//     "clues": [
//       "Known for its vibrant arts scene and annual festivals.",
//       "A city celebrated for its wine regions and historic architecture."
//     ],
//     "fun_fact": [
//       "Adelaide hosts numerous festivals, including the Adelaide Fringe.",
//       "The city is close to famous wine regions like Barossa Valley."
//     ],
//     "trivia": [
//       "Adelaide's central market is a foodie’s delight.",
//       "The city offers a blend of modern design and colonial heritage."
//     ],
//     "options": [
//       "Melbourne",
//       "Adelaide",
//       "Brisbane",
//       "Perth"
//     ]
//   },
//   {
//     "city": "Brisbane",
//     "country": "Australia",
//     "clues": [
//       "A city known for its warm climate and riverfront attractions.",
//       "Home to a blend of modern skyscrapers and lush parks."
//     ],
//     "fun_fact": [
//       "Brisbane hosts the annual Riverfire festival with spectacular fireworks.",
//       "The city is a gateway to popular beach destinations along the coast."
//     ],
//     "trivia": [
//       "Brisbane's South Bank features cultural institutions and outdoor dining.",
//       "The city is known for its friendly atmosphere and vibrant arts scene."
//     ],
//     "options": [
//       "Gold Coast",
//       "Sydney",
//       "Canberra",
//       "Brisbane"
//     ]
//   },
//   {
//     "city": "Darwin",
//     "country": "Australia",
//     "clues": [
//       "A tropical city known for its proximity to natural wonders.",
//       "Famous for its rich Indigenous culture and laid-back lifestyle."
//     ],
//     "fun_fact": [
//       "Darwin is the gateway to Kakadu National Park and other natural reserves.",
//       "The city has a unique mix of Aboriginal culture and modern influences."
//     ],
//     "trivia": [
//       "Darwin's waterfront is a popular spot for locals and tourists alike.",
//       "The city is known for its vibrant markets and outdoor festivals."
//     ],
//     "options": [
//       "Alice Springs",
//       "Adelaide",
//       "Darwin",
//       "Perth"
//     ]
//   },
//   {
//     "city": "Salvador",
//     "country": "Brazil",
//     "clues": [
//       "A city renowned for its Afro-Brazilian culture and vibrant music.",
//       "Known for its colonial architecture and colorful festivals."
//     ],
//     "fun_fact": [
//       "Salvador was one of the first colonial capitals in the Americas.",
//       "The city is famous for its rich tradition of capoeira and samba."
//     ],
//     "trivia": [
//       "Salvador's historic center is a UNESCO World Heritage site.",
//       "The city offers a blend of cultural traditions and modern urban life."
//     ],
//     "options": [
//       "Natal",
//       "Salvador",
//       "Recife",
//       "Fortaleza"
//     ]
//   },
//   {
//     "city": "Porto",
//     "country": "Portugal",
//     "clues": [
//       "Famous for its port wine and picturesque riverside setting.",
//       "A city with a rich history and charming narrow streets."
//     ],
//     "fun_fact": [
//       "Porto's historic center is a UNESCO World Heritage site.",
//       "The city is celebrated for its wine cellars and culinary delights."
//     ],
//     "trivia": [
//       "Porto is known for its stunning bridges that span the Douro River.",
//       "The city's architecture is a blend of medieval and modern styles."
//     ],
//     "options": [
//       "Braga",
//       "Coimbra",
//       "Lisbon",
//       "Porto"
//     ]
//   },
//   {
//     "city": "Valencia",
//     "country": "Spain",
//     "clues": [
//       "A vibrant coastal city known for its futuristic architecture.",
//       "Home to a famous annual festival celebrating art and fire."
//     ],
//     "fun_fact": [
//       "Valencia is the birthplace of the traditional Spanish paella.",
//       "The city is known for its stunning City of Arts and Sciences complex."
//     ],
//     "trivia": [
//       "Valencia hosts the annual Las Fallas festival with spectacular fireworks.",
//       "The city is a hub for innovation and modern art."
//     ],
//     "options": [
//       "Barcelona",
//       "Valencia",
//       "Seville",
//       "Madrid"
//     ]
//   },
//   {
//     "city": "Seville",
//     "country": "Spain",
//     "clues": [
//       "A historic city known for its flamenco dancing and Moorish architecture.",
//       "Home to grand palaces and vibrant street festivals."
//     ],
//     "fun_fact": [
//       "Seville's Alcazar is one of the oldest royal palaces still in use.",
//       "The city is famous for its lively Feria de Abril celebrations."
//     ],
//     "trivia": [
//       "Seville is known for its orange blossoms and picturesque gardens.",
//       "The city blends ancient traditions with modern cultural events."
//     ],
//     "options": [
//       "Madrid",
//       "Valencia",
//       "Seville",
//       "Granada"
//     ]
//   },
//   {
//     "city": "Malaga",
//     "country": "Spain",
//     "clues": [
//       "A sunny coastal city known for its beaches and historic sites.",
//       "Home to art museums and a vibrant cultural scene."
//     ],
//     "fun_fact": [
//       "Malaga is the birthplace of the famous artist Pablo Picasso.",
//       "The city has transformed from a fishing port to a modern cultural hub."
//     ],
//     "trivia": [
//       "Malaga's historic center features narrow streets and ancient architecture.",
//       "The city is renowned for its lively festivals and culinary traditions."
//     ],
//     "options": [
//       "Barcelona",
//       "Madrid",
//       "Malaga",
//       "Seville"
//     ]
//   },
//   {
//     "city": "Bilbao",
//     "country": "Spain",
//     "clues": [
//       "A city that blends industrial heritage with modern art and architecture.",
//       "Home to the famous Guggenheim Museum."
//     ],
//     "fun_fact": [
//       "Bilbao's transformation from an industrial center to a cultural hotspot is remarkable.",
//       "The Guggenheim Museum Bilbao is an icon of contemporary architecture."
//     ],
//     "trivia": [
//       "Bilbao is known for its innovative urban regeneration projects.",
//       "The city has a unique culinary scene featuring pintxos."
//     ],
//     "options": [
//       "Vitoria",
//       "Bilbao",
//       "Pamplona",
//       "San Sebastian"
//     ]
//   },
//   {
//     "city": "Montevideo",
//     "country": "Uruguay",
//     "clues": [
//       "The capital city known for its beachfront promenade and laid-back vibe.",
//       "A city with a blend of colonial charm and modern urban culture."
//     ],
//     "fun_fact": [
//       "Montevideo has a rich cultural scene with theaters, museums, and festivals.",
//       "The city is known for its extensive parks and seaside promenades."
//     ],
//     "trivia": [
//       "Montevideo's old town features historic buildings and lively plazas.",
//       "The city is celebrated for its vibrant music and dance traditions."
//     ],
//     "options": [
//       "Punta del Este",
//       "Montevideo",
//       "Colonia",
//       "Salto"
//     ]
//   },
//   {
//     "city": "Asuncion",
//     "country": "Paraguay",
//     "clues": [
//       "The capital city known for its colonial architecture and river views.",
//       "A blend of historic landmarks and modern developments."
//     ],
//     "fun_fact": [
//       "Asuncion is one of the oldest cities in South America.",
//       "The city is known for its warm, welcoming atmosphere."
//     ],
//     "trivia": [
//       "Asuncion's historic center is rich in cultural heritage.",
//       "The city is a hub for arts, music, and local traditions."
//     ],
//     "options": [
//       "Encarnacion",
//       "Asuncion",
//       "Ciudad del Este",
//       "Concepcion"
//     ]
//   },
//   {
//     "city": "Quito",
//     "country": "Ecuador",
//     "clues": [
//       "A high-altitude capital set in the Andean mountains.",
//       "Known for its well-preserved colonial center."
//     ],
//     "fun_fact": [
//       "Quito is one of the highest official capital cities in the world.",
//       "The city is famous for its vibrant markets and traditional crafts."
//     ],
//     "trivia": [
//       "Quito's historic center is a UNESCO World Heritage site.",
//       "The city offers stunning views of surrounding volcanoes."
//     ],
//     "options": [
//       "Cuenca",
//       "Ambato",
//       "Quito",
//       "Guayaquil"
//     ]
//   },
//   {
//     "city": "Guayaquil",
//     "country": "Ecuador",
//     "clues": [
//       "A bustling port city known for its riverfront and vibrant culture.",
//       "The economic hub of Ecuador with a dynamic urban scene."
//     ],
//     "fun_fact": [
//       "Guayaquil is famous for its Malecón, a scenic waterfront promenade.",
//       "The city has experienced rapid growth and modernization in recent years."
//     ],
//     "trivia": [
//       "Guayaquil is known for its tropical climate and lively festivals.",
//       "The city is a key center for trade and commerce in Ecuador."
//     ],
//     "options": [
//       "Manta",
//       "Guayaquil",
//       "Portoviejo",
//       "Quito"
//     ]
//   },
//   {
//     "city": "Dakar",
//     "country": "Senegal",
//     "clues": [
//       "A vibrant coastal city known for its music and art scene.",
//       "The capital of Senegal with a rich blend of cultures."
//     ],
//     "fun_fact": [
//       "Dakar is famous for its colorful markets and lively street life.",
//       "The city is a cultural hub that has influenced music and art across Africa."
//     ],
//     "trivia": [
//       "Dakar hosts the annual Dakar Rally, a challenging off-road race.",
//       "The city is known for its diverse culinary traditions."
//     ],
//     "options": [
//       "Touba",
//       "Saint-Louis",
//       "Dakar",
//       "Ziguinchor"
//     ]
//   },
//   {
//     "city": "Accra",
//     "country": "Ghana",
//     "clues": [
//       "A bustling city known for its historical forts and vibrant markets.",
//       "The capital of Ghana, rich in cultural heritage."
//     ],
//     "fun_fact": [
//       "Accra is famous for its blend of modern development and traditional culture.",
//       "The city hosts numerous festivals celebrating Ghanaian music and art."
//     ],
//     "trivia": [
//       "Accra's coastal location contributes to its vibrant seafood cuisine.",
//       "The city is a center for education and cultural institutions."
//     ],
//     "options": [
//       "Takoradi",
//       "Accra",
//       "Kumasi",
//       "Tamale"
//     ]
//   },
//   {
//     "city": "Nairobi",
//     "country": "Kenya",
//     "clues": [
//       "A dynamic city known as the gateway to African safaris.",
//       "Home to diverse wildlife and a bustling urban center."
//     ],
//     "fun_fact": [
//       "Nairobi is one of the few cities in the world with a national park on its doorstep.",
//       "The city has a vibrant mix of modern business and traditional culture."
//     ],
//     "trivia": [
//       "Nairobi's museums showcase the rich history of Kenya.",
//       "The city is known for its entrepreneurial spirit and diverse cuisine."
//     ],
//     "options": [
//       "Kisumu",
//       "Nairobi",
//       "Mombasa",
//       "Eldoret"
//     ]
//   },
//   {
//     "city": "Lagos",
//     "country": "Nigeria",
//     "clues": [
//       "A bustling megacity known for its vibrant music and entertainment scene.",
//       "The economic hub of Nigeria with a rich cultural tapestry."
//     ],
//     "fun_fact": [
//       "Lagos is one of the fastest-growing cities in Africa.",
//       "The city is famous for its dynamic art, music, and film industries."
//     ],
//     "trivia": [
//       "Lagos hosts numerous festivals celebrating its diverse cultural heritage.",
//       "The city is known for its lively street markets and bustling ports."
//     ],
//     "options": [
//       "Ibadan",
//       "Abuja",
//       "Kano",
//       "Lagos"
//     ]
//   },
//   {
//     "city": "Algiers",
//     "country": "Algeria",
//     "clues": [
//       "The capital city known for its whitewashed buildings and Mediterranean charm.",
//       "A city that blends French colonial influences with North African heritage."
//     ],
//     "fun_fact": [
//       "Algiers is often called 'Alger la Blanche' for its beautiful white architecture.",
//       "The city has a rich history shaped by various civilizations."
//     ],
//     "trivia": [
//       "Algiers features a mix of modern boulevards and ancient medinas.",
//       "The city is a cultural center in North Africa with vibrant markets."
//     ],
//     "options": [
//       "Constantine",
//       "Annaba",
//       "Algiers",
//       "Oran"
//     ]
//   },
//   {
//     "city": "Tunis",
//     "country": "Tunisia",
//     "clues": [
//       "A city rich in history, from ancient Carthage to modern times.",
//       "Known for its medinas and vibrant souks."
//     ],
//     "fun_fact": [
//       "Tunis's medina is a UNESCO World Heritage site.",
//       "The city is a blend of Arab, Berber, and French influences."
//     ],
//     "trivia": [
//       "Tunis is known for its lively marketplaces and rich culinary traditions.",
//       "The city has a long history dating back to ancient civilizations."
//     ],
//     "options": [
//       "Bizerte",
//       "Tunis",
//       "Sfax",
//       "Sousse"
//     ]
//   },
//   {
//     "city": "Casablanca",
//     "country": "Morocco",
//     "clues": [
//       "A bustling port city with a mix of modern and colonial architecture.",
//       "Famous for its iconic film and vibrant economic scene."
//     ],
//     "fun_fact": [
//       "Casablanca is the largest city in Morocco and a major economic hub.",
//       "The city features a blend of art deco and modern design."
//     ],
//     "trivia": [
//       "Casablanca's Hassan II Mosque is one of the largest in the world.",
//       "The city has been a backdrop for many classic films."
//     ],
//     "options": [
//       "Rabat",
//       "Casablanca",
//       "Fez",
//       "Marrakech"
//     ]
//   },
//   {
//     "city": "Muscat",
//     "country": "Oman",
//     "clues": [
//       "A coastal city known for its stunning mosques and natural harbors.",
//       "A city that reflects the rich maritime heritage of Oman."
//     ],
//     "fun_fact": [
//       "Muscat's Sultan Qaboos Grand Mosque is a marvel of modern Islamic architecture.",
//       "The city is known for its pristine beaches and clear blue waters."
//     ],
//     "trivia": [
//       "Muscat is celebrated for its traditional markets and ancient forts.",
//       "The city offers a blend of modern luxury and cultural heritage."
//     ],
//     "options": [
//       "Nizwa",
//       "Muscat",
//       "Salalah",
//       "Sohar"
//     ]
//   },
//   {
//     "city": "Riyadh",
//     "country": "Saudi Arabia",
//     "clues": [
//       "The capital city known for its modern skyscrapers and historic sites.",
//       "A city that blends tradition with rapid modernization."
//     ],
//     "fun_fact": [
//       "Riyadh is a major business hub in the Middle East.",
//       "The city has undergone rapid transformation over the past few decades."
//     ],
//     "trivia": [
//       "Riyadh hosts cultural festivals that showcase Saudi heritage.",
//       "The city is known for its modern shopping malls and traditional souks."
//     ],
//     "options": [
//       "Mecca",
//       "Jeddah",
//       "Riyadh",
//       "Dammam"
//     ]
//   },
//   {
//     "city": "Jeddah",
//     "country": "Saudi Arabia",
//     "clues": [
//       "A coastal city known for its historic old town and Red Sea views.",
//       "A gateway for pilgrims heading to Mecca."
//     ],
//     "fun_fact": [
//       "Jeddah is famous for its beautifully restored historical district, Al-Balad.",
//       "The city is a major hub for trade and cultural exchange in the region."
//     ],
//     "trivia": [
//       "Jeddah's waterfront is popular for leisure and dining.",
//       "The city is known for its blend of modern and traditional architecture."
//     ],
//     "options": [
//       "Medina",
//       "Riyadh",
//       "Dammam",
//       "Jeddah"
//     ]
//   },
//   {
//     "city": "Kuwait City",
//     "country": "Kuwait",
//     "clues": [
//       "The capital city known for its modern skyline and rich oil heritage.",
//       "A city that has rapidly developed with impressive architecture."
//     ],
//     "fun_fact": [
//       "Kuwait City is a major financial hub in the Middle East.",
//       "The city is known for its vibrant cultural scene and luxury shopping."
//     ],
//     "trivia": [
//       "Kuwait City features a mix of modern high-rises and traditional markets.",
//       "The city has a rich history influenced by its maritime past."
//     ],
//     "options": [
//       "Dubai",
//       "Kuwait City",
//       "Manama",
//       "Doha"
//     ]
//   },
//   {
//     "city": "Lviv",
//     "country": "Ukraine",
//     "clues": [
//       "A city renowned for its historic charm and vibrant cultural scene.",
//       "Known for its cobblestone streets and eclectic architecture."
//     ],
//     "fun_fact": [
//       "Lviv is famous for its well-preserved medieval core and coffee culture.",
//       "The city has a rich history influenced by various European cultures."
//     ],
//     "trivia": [
//       "Lviv hosts numerous festivals celebrating art, music, and literature.",
//       "The city is often considered a cultural capital of Ukraine."
//     ],
//     "options": [
//       "Odessa",
//       "Kyiv",
//       "Lviv",
//       "Kharkiv"
//     ]
//   },
//   {
//     "city": "Kyiv",
//     "country": "Ukraine",
//     "clues": [
//       "The capital of Ukraine, known for its historic churches and vibrant city life.",
//       "A city with a rich history and dynamic modern culture."
//     ],
//     "fun_fact": [
//       "Kyiv is one of the oldest cities in Eastern Europe, with a history dating back over 1,400 years.",
//       "The city is renowned for its beautiful, golden-domed churches."
//     ],
//     "trivia": [
//       "Kyiv's Maidan Nezalezhnosti is a symbol of Ukrainian resilience and unity.",
//       "The city blends historic landmarks with contemporary urban energy."
//     ],
//     "options": [
//       "Kharkiv",
//       "Kyiv",
//       "Dnipro",
//       "Lviv"
//     ]
//   }
// ]
  
  module.exports = {
    travel_dataset
  }