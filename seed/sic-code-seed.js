const sicSeed = [
    {
      code: 100,
      title: "AGRICULTURAL PRODUCTION-CROPS"
    },
    {
      code: 200,
      title: "AGRICULTURAL PROD-LIVESTOCK & ANIMAL SPECIALTIES"
    },
    {
      code: 700,
      title: "AGRICULTURAL SERVICES"
    },
    {
      code: 800,
      title: "FORESTRY"
    },
    {
      code: 900,
      title: "FISHING, HUNTING AND TRAPPING"
    },
    {
      code: 1000,
      title: "METAL MINING"
    },
    {
      code: 1040,
      title: "GOLD AND SILVER ORES"
    },
    {
      code: 1090,
      title: "MISCELLANEOUS METAL ORES"
    },
    {
      code: 1220,
      title: "BITUMINOUS COAL & LIGNITE MINING"
    },
    {
      code: 1221,
      title: "BITUMINOUS COAL & LIGNITE SURFACE MINING"
    },
    {
      code: 1311,
      title: "CRUDE PETROLEUM & NATURAL GAS"
    },
    {
      code: 1381,
      title: "DRILLING OIL & GAS WELLS"
    },
    {
      code: 1382,
      title: "OIL & GAS FIELD EXPLORATION SERVICES"
    },
    {
      code: 1389,
      title: "OIL & GAS FIELD SERVICES, NEC"
    },
    {
      code: 1400,
      title: "MINING & QUARRYING OF NONMETALLIC MINERALS (NO FUELS)"
    },
    {
      code: 1520,
      title: "GENERAL BLDG CONTRACTORS - RESIDENTIAL BLDGS"
    },
    {
      code: 1531,
      title: "OPERATIVE BUILDERS"
    },
    {
      code: 1540,
      title: "GENERAL BLDG CONTRACTORS - NONRESIDENTIAL BLDGS"
    },
    {
      code: 1600,
      title: "HEAVY CONSTRUCTION OTHER THAN BLDG CONST - CONTRACTORS"
    },
    {
      code: 1623,
      title: "WATER, SEWER, PIPELINE, COMM & POWER LINE CONSTRUCTION"
    },
    {
      code: 1700,
      title: "CONSTRUCTION - SPECIAL TRADE CONTRACTORS"
    },
    {
      code: 1731,
      title: "ELECTRICAL WORK"
    },
    {
      code: 2000,
      title: "FOOD AND KINDRED PRODUCTS"
    },
    {
      code: 2011,
      title: "MEAT PACKING PLANTS"
    },
    {
      code: 2013,
      title: "SAUSAGES & OTHER PREPARED MEAT PRODUCTS"
    },
    {
      code: 2015,
      title: "POULTRY SLAUGHTERING AND PROCESSING"
    },
    {
      code: 2020,
      title: "DAIRY PRODUCTS"
    },
    {
      code: 2024,
      title: "ICE CREAM & FROZEN DESSERTS"
    },
    {
      code: 2030,
      title: "CANNED, FROZEN & PRESERVD FRUIT, VEG & FOOD SPECIALTIES"
    },
    {
      code: 2033,
      title: "CANNED, FRUITS, VEG, PRESERVES, JAMS & JELLIES"
    },
    {
      code: 2040,
      title: "GRAIN MILL PRODUCTS"
    },
    {
      code: 2050,
      title: "BAKERY PRODUCTS"
    },
    {
      code: 2052,
      title: "COOKIES & CRACKERS"
    },
    {
      code: 2060,
      title: "SUGAR & CONFECTIONERY PRODUCTS"
    },
    {
      code: 2070,
      title: "FATS & OILS"
    },
    {
      code: 2080,
      title: "BEVERAGES"
    },
    {
      code: 2082,
      title: "MALT BEVERAGES"
    },
    {
      code: 2086,
      title: "BOTTLED & CANNED SOFT DRINKS & CARBONATED WATERS"
    },
    {
      code: 2090,
      title: "MISCELLANEOUS FOOD PREPARATIONS & KINDRED PRODUCTS"
    },
    {
      code: 2092,
      title: "PREPARED FRESH OR FROZEN FISH & SEAFOODS"
    },
    {
      code: 2100,
      title: "TOBACCO PRODUCTS"
    },
    {
      code: 2111,
      title: "CIGARETTES"
    },
    {
      code: 2200,
      title: "TEXTILE MILL PRODUCTS"
    },
    {
      code: 2211,
      title: "BROADWOVEN FABRIC MILLS, COTTON"
    },
    {
      code: 2221,
      title: "BROADWOVEN FABRIC MILLS, MAN MADE FIBER & SILK"
    },
    {
      code: 2250,
      title: "KNITTING MILLS"
    },
    {
      code: 2253,
      title: "KNIT OUTERWEAR MILLS"
    },
    {
      code: 2273,
      title: "CARPETS & RUGS"
    },
    {
      code: 2300,
      title: "APPAREL & OTHER FINISHD PRODS OF FABRICS & SIMILAR MATL"
    },
    {
      code: 2320,
      title: "MEN'S & BOYS' FURNISHGS, WORK CLOTHG, & ALLIED GARMENTS"
    },
    {
      code: 2330,
      title: "WOMEN'S, MISSES', AND JUNIORS OUTERWEAR"
    },
    {
      code: 2340,
      title: "WOMEN'S, MISSES', CHILDREN'S & INFANTS' UNDERGARMENTS"
    },
    {
      code: 2390,
      title: "MISCELLANEOUS FABRICATED TEXTILE PRODUCTS"
    },
    {
      code: 2400,
      title: "LUMBER & WOOD PRODUCTS (NO FURNITURE)"
    },
    {
      code: 2421,
      title: "SAWMILLS & PLANTING MILLS, GENERAL"
    },
    {
      code: 2430,
      title: "MILLWOOD, VENEER, PLYWOOD, & STRUCTURAL WOOD MEMBERS"
    },
    {
      code: 2451,
      title: "MOBILE HOMES"
    },
    {
      code: 2452,
      title: "PREFABRICATED WOOD BLDGS & COMPONENTS"
    },
    {
      code: 2510,
      title: "HOUSEHOLD FURNITURE"
    },
    {
      code: 2511,
      title: "WOOD HOUSEHOLD FURNITURE, (NO UPHOLSTERED)"
    },
    {
      code: 2520,
      title: "OFFICE FURNITURE"
    },
    {
      code: 2522,
      title: "OFFICE FURNITURE (NO WOOD)"
    },
    {
      code: 2531,
      title: "PUBLIC BLDG & RELATED FURNITURE"
    },
    {
      code: 2540,
      title: "PARTITIONS, SHELVG, LOCKERS, & OFFICE & STORE FIXTURES"
    },
    {
      code: 2590,
      title: "MISCELLANEOUS FURNITURE & FIXTURES"
    },
    {
      code: 2600,
      title: "PAPERS & ALLIED PRODUCTS"
    },
    {
      code: 2611,
      title: "PULP MILLS"
    },
    {
      code: 2621,
      title: "PAPER MILLS"
    },
    {
      code: 2631,
      title: "PAPERBOARD MILLS"
    },
    {
      code: 2650,
      title: "PAPERBOARD CONTAINERS & BOXES"
    },
    {
      code: 2670,
      title: "CONVERTED PAPER & PAPERBOARD PRODS (NO CONTANERS/BOXES)"
    },
    {
      code: 2673,
      title: "PLASTICS, FOIL & COATED PAPER BAGS"
    },
    {
      code: 2711,
      title: "NEWSPAPERS: PUBLISHING OR PUBLISHING & PRINTING"
    },
    {
      code: 2721,
      title: "PERIODICALS: PUBLISHING OR PUBLISHING & PRINTING"
    },
    {
      code: 2731,
      title: "BOOKS: PUBLISHING OR PUBLISHING & PRINTING"
    },
    {
      code: 2732,
      title: "BOOK PRINTING"
    },
    {
      code: 2741,
      title: "MISCELLANEOUS PUBLISHING"
    },
    {
      code: 2750,
      title: "COMMERCIAL PRINTING"
    },
    {
      code: 2761,
      title: "MANIFOLD BUSINESS FORMS"
    },
    {
      code: 2771,
      title: "GREETING CARDS"
    },
    {
      code: 2780,
      title: "BLANKBOOKS, LOOSELEAF BINDERS & BOOKBINDG & RELATD WORK"
    },
    {
      code: 2790,
      title: "SERVICE INDUSTRIES FOR THE PRINTING TRADE"
    },
    {
      code: 2800,
      title: "CHEMICALS & ALLIED PRODUCTS"
    },
    {
      code: 2810,
      title: "INDUSTRIAL INORGANIC CHEMICALS"
    },
    {
      code: 2820,
      title: "PLASTIC MATERIAL, SYNTH RESIN/RUBBER, CELLULOS (NO GLASS)"
    },
    {
      code: 2821,
      title: "PLASTIC MATERIALS, SYNTH RESINS & NONVULCAN ELASTOMERS"
    },
    {
      code: 2833,
      title: "MEDICINAL CHEMICALS & BOTANICAL PRODUCTS"
    },
    {
      code: 2834,
      title: "PHARMACEUTICAL PREPARATIONS"
    },
    {
      code: 2835,
      title: "IN VITRO & IN VIVO DIAGNOSTIC SUBSTANCES"
    },
    {
      code: 2836,
      title: "BIOLOGICAL PRODUCTS, (NO DISGNOSTIC SUBSTANCES)"
    },
    {
      code: 2840,
      title: "SOAP, DETERGENTS, CLEANG PREPARATIONS, PERFUMES, COSMETICS"
    },
    {
      code: 2842,
      title: "SPECIALTY CLEANING, POLISHING AND SANITATION PREPARATIONS"
    },
    {
      code: 2844,
      title: "PERFUMES, COSMETICS & OTHER TOILET PREPARATIONS"
    },
    {
      code: 2851,
      title: "PAINTS, VARNISHES, LACQUERS, ENAMELS & ALLIED PRODS"
    },
    {
      code: 2860,
      title: "INDUSTRIAL ORGANIC CHEMICALS"
    },
    {
      code: 2870,
      title: "AGRICULTURAL CHEMICALS"
    },
    {
      code: 2890,
      title: "MISCELLANEOUS CHEMICAL PRODUCTS"
    },
    {
      code: 2891,
      title: "ADHESIVES & SEALANTS"
    },
    {
      code: 2911,
      title: "PETROLEUM REFINING"
    },
    {
      code: 2950,
      title: "ASPHALT PAVING & ROOFING MATERIALS"
    },
    {
      code: 2990,
      title: "MISCELLANEOUS PRODUCTS OF PETROLEUM & COAL"
    },
    {
      code: 3011,
      title: "TIRES & INNER TUBES"
    },
    {
      code: 3021,
      title: "RUBBER & PLASTICS FOOTWEAR"
    },
    {
      code: 3050,
      title: "GASKETS, PACKG & SEALG DEVICES & RUBBER & PLASTICS HOSE"
    },
    {
      code: 3060,
      title: "FABRICATED RUBBER PRODUCTS, NEC"
    },
    {
      code: 3080,
      title: "MISCELLANEOUS PLASTICS PRODUCTS"
    },
    {
      code: 3081,
      title: "UNSUPPORTED PLASTICS FILM & SHEET"
    },
    {
      code: 3086,
      title: "PLASTICS FOAM PRODUCTS"
    },
    {
      code: 3089,
      title: "PLASTICS PRODUCTS, NEC"
    },
    {
      code: 3100,
      title: "LEATHER & LEATHER PRODUCTS"
    },
    {
      code: 3140,
      title: "FOOTWEAR, (NO RUBBER)"
    },
    {
      code: 3211,
      title: "FLAT GLASS"
    },
    {
      code: 3220,
      title: "GLASS & GLASSWARE, PRESSED OR BLOWN"
    },
    {
      code: 3221,
      title: "GLASS CONTAINERS"
    },
    {
      code: 3231,
      title: "GLASS PRODUCTS, MADE OF PURCHASED GLASS"
    },
    {
      code: 3241,
      title: "CEMENT, HYDRAULIC"
    },
    {
      code: 3250,
      title: "STRUCTURAL CLAY PRODUCTS"
    },
    {
      code: 3260,
      title: "POTTERY & RELATED PRODUCTS"
    },
    {
      code: 3270,
      title: "CONCRETE, GYPSUM & PLASTER PRODUCTS"
    },
    {
      code: 3272,
      title: "CONCRETE PRODUCTS, EXCEPT BLOCK & BRICK"
    },
    {
      code: 3281,
      title: "CUT STONE & STONE PRODUCTS"
    },
    {
      code: 3290,
      title: "ABRASIVE, ASBESTOS & MISC NONMETALLIC MINERAL PRODS"
    },
    {
      code: 3310,
      title: "STEEL WORKS, BLAST FURNACES & ROLLING & FINISHING MILLS"
    },
    {
      code: 3312,
      title: "STEEL WORKS, BLAST FURNACES & ROLLING MILLS (COKE OVENS)"
    },
    {
      code: 3317,
      title: "STEEL PIPE & TUBES"
    },
    {
      code: 3320,
      title: "IRON & STEEL FOUNDRIES"
    },
    {
      code: 3330,
      title: "PRIMARY SMELTING & REFINING OF NONFERROUS METALS"
    },
    {
      code: 3334,
      title: "PRIMARY PRODUCTION OF ALUMINUM"
    },
    {
      code: 3341,
      title: "SECONDARY SMELTING & REFINING OF NONFERROUS METALS"
    },
    {
      code: 3350,
      title: "ROLLING DRAWING & EXTRUDING OF NONFERROUS METALS"
    },
    {
      code: 3357,
      title: "DRAWING & INSULATING OF NONFERROUS WIRE"
    },
    {
      code: 3360,
      title: "NONFERROUS FOUNDRIES (CASTINGS)"
    },
    {
      code: 3390,
      title: "MISCELLANEOUS PRIMARY METAL PRODUCTS"
    },
    {
      code: 3411,
      title: "METAL CANS"
    },
    {
      code: 3412,
      title: "METAL SHIPPING BARRELS, DRUMS, KEGS & PAILS"
    },
    {
      code: 3420,
      title: "CUTLERY, HANDTOOLS & GENERAL HARDWARE"
    },
    {
      code: 3430,
      title: "HEATING EQUIP, EXCEPT ELEC & WARM AIR; & PLUMBING FIXTURES"
    },
    {
      code: 3433,
      title: "HEATING EQUIPMENT, EXCEPT ELECTRIC & WARM AIR FURNACES"
    },
    {
      code: 3440,
      title: "FABRICATED STRUCTURAL METAL PRODUCTS"
    },
    {
      code: 3442,
      title: "METAL DOORS, SASH, FRAMES, MOLDINGS & TRIM"
    },
    {
      code: 3443,
      title: "FABRICATED PLATE WORK (BOILER SHOPS)"
    },
    {
      code: 3444,
      title: "SHEET METAL WORK"
    },
    {
      code: 3448,
      title: "PREFABRICATED METAL BUILDINGS & COMPONENTS"
    },
    {
      code: 3451,
      title: "SCREW MACHINE PRODUCTS"
    },
    {
      code: 3452,
      title: "BOLTS, NUTS, SCREWS, RIVETS & WASHERS"
    },
    {
      code: 3460,
      title: "METAL FORGINGS & STAMPINGS"
    },
    {
      code: 3470,
      title: "COATING, ENGRAVING & ALLIED SERVICES"
    },
    {
      code: 3480,
      title: "ORDNANCE & ACCESSORIES, (NO VEHICLES/GUIDED MISSILES)"
    },
    {
      code: 3490,
      title: "MISCELLANEOUS FABRICATED METAL PRODUCTS"
    },
    {
      code: 3510,
      title: "ENGINES & TURBINES"
    },
    {
      code: 3523,
      title: "FARM MACHINERY & EQUIPMENT"
    },
    {
      code: 3524,
      title: "LAWN & GARDEN TRACTORS & HOME LAWN & GARDENS EQUIP"
    },
    {
      code: 3530,
      title: "CONSTRUCTION, MINING & MATERIALS HANDLING MACHINERY & EQUIP"
    },
    {
      code: 3531,
      title: "CONSTRUCTION MACHINERY & EQUIP"
    },
    {
      code: 3532,
      title: "MINING MACHINERY & EQUIP (NO OIL & GAS FIELD MACH & EQUIP)"
    },
    {
      code: 3533,
      title: "OIL & GAS FIELD MACHINERY & EQUIPMENT"
    },
    {
      code: 3537,
      title: "INDUSTRIAL TRUCKS, TRACTORS, TRAILORS & STACKERS"
    },
    {
      code: 3540,
      title: "METALWORKG MACHINERY & EQUIPMENT"
    },
    {
      code: 3541,
      title: "MACHINE TOOLS, METAL CUTTING TYPES"
    },
    {
      code: 3550,
      title: "SPECIAL INDUSTRY MACHINERY (NO METALWORKING MACHINERY)"
    },
    {
      code: 3555,
      title: "PRINTING TRADES MACHINERY & EQUIPMENT"
    },
    {
      code: 3559,
      title: "SPECIAL INDUSTRY MACHINERY, NEC"
    },
    {
      code: 3560,
      title: "GENERAL INDUSTRIAL MACHINERY & EQUIPMENT"
    },
    {
      code: 3561,
      title: "PUMPS & PUMPING EQUIPMENT"
    },
    {
      code: 3562,
      title: "BALL & ROLLER BEARINGS"
    },
    {
      code: 3564,
      title: "INDUSTRIAL & COMMERCIAL FANS & BLOWERS & AIR PURIFING EQUIP"
    },
    {
      code: 3567,
      title: "INDUSTRIAL PROCESS FURNACES & OVENS"
    },
    {
      code: 3569,
      title: "GENERAL INDUSTRIAL MACHINERY & EQUIPMENT, NEC"
    },
    {
      code: 3570,
      title: "COMPUTER & OFFICE EQUIPMENT"
    },
    {
      code: 3571,
      title: "ELECTRONIC COMPUTERS"
    },
    {
      code: 3572,
      title: "COMPUTER STORAGE DEVICES"
    },
    {
      code: 3575,
      title: "COMPUTER TERMINALS"
    },
    {
      code: 3576,
      title: "COMPUTER COMMUNICATIONS EQUIPMENT"
    },
    {
      code: 3577,
      title: "COMPUTER PERIPHERAL EQUIPMENT, NEC"
    },
    {
      code: 3578,
      title: "CALCULATING & ACCOUNTING MACHINES (NO ELECTRONIC COMPUTERS)"
    },
    {
      code: 3579,
      title: "OFFICE MACHINES, NEC"
    },
    {
      code: 3580,
      title: "REFRIGERATION & SERVICE INDUSTRY MACHINERY"
    },
    {
      code: 3585,
      title: "AIR-COND & WARM AIR HEATG EQUIP & COMM & INDL REFRIG EQUIP"
    },
    {
      code: 3590,
      title: "MISC INDUSTRIAL & COMMERCIAL MACHINERY & EQUIPMENT"
    },
    {
      code: 3600,
      title: "ELECTRONIC & OTHER ELECTRICAL EQUIPMENT (NO COMPUTER EQUIP)"
    },
    {
      code: 3612,
      title: "POWER, DISTRIBUTION & SPECIALTY TRANSFORMERS"
    },
    {
      code: 3613,
      title: "SWITCHGEAR & SWITCHBOARD APPARATUS"
    },
    {
      code: 3620,
      title: "ELECTRICAL INDUSTRIAL APPARATUS"
    },
    {
      code: 3621,
      title: "MOTORS & GENERATORS"
    },
    {
      code: 3630,
      title: "HOUSEHOLD APPLIANCES"
    },
    {
      code: 3634,
      title: "ELECTRIC HOUSEWARES & FANS"
    },
    {
      code: 3640,
      title: "ELECTRIC LIGHTING & WIRING EQUIPMENT"
    },
    {
      code: 3651,
      title: "HOUSEHOLD AUDIO & VIDEO EQUIPMENT"
    },
    {
      code: 3652,
      title: "PHONOGRAPH RECORDS & PRERECORDED AUDIO TAPES & DISKS"
    },
    {
      code: 3661,
      title: "TELEPHONE & TELEGRAPH APPARATUS"
    },
    {
      code: 3663,
      title: "RADIO & TV BROADCASTING & COMMUNICATIONS EQUIPMENT"
    },
    {
      code: 3669,
      title: "COMMUNICATIONS EQUIPMENT, NEC"
    },
    {
      code: 3670,
      title: "ELECTRONIC COMPONENTS & ACCESSORIES"
    },
    {
      code: 3672,
      title: "PRINTED CIRCUIT BOARDS"
    },
    {
      code: 3674,
      title: "SEMICONDUCTORS & RELATED DEVICES"
    },
    {
      code: 3677,
      title: "ELECTRONIC COILS, TRANSFORMERS & OTHER INDUCTORS"
    },
    {
      code: 3678,
      title: "ELECTRONIC CONNECTORS"
    },
    {
      code: 3679,
      title: "ELECTRONIC COMPONENTS, NEC"
    },
    {
      code: 3690,
      title: "MISCELLANEOUS ELECTRICAL MACHINERY, EQUIPMENT & SUPPLIES"
    },
    {
      code: 3695,
      title: "MAGNETIC & OPTICAL RECORDING MEDIA"
    },
    {
      code: 3711,
      title: "MOTOR VEHICLES & PASSENGER CAR BODIES"
    },
    {
      code: 3713,
      title: "TRUCK & BUS BODIES"
    },
    {
      code: 3714,
      title: "MOTOR VEHICLE PARTS & ACCESSORIES"
    },
    {
      code: 3715,
      title: "TRUCK TRAILERS"
    },
    {
      code: 3716,
      title: "MOTOR HOMES"
    },
    {
      code: 3720,
      title: "AIRCRAFT & PARTS"
    },
    {
      code: 3721,
      title: "AIRCRAFT"
    },
    {
      code: 3724,
      title: "AIRCRAFT ENGINES & ENGINE PARTS"
    },
    {
      code: 3728,
      title: "AIRCRAFT PARTS & AUXILIARY EQUIPMENT, NEC"
    },
    {
      code: 3730,
      title: "SHIP & BOAT BUILDING & REPAIRING"
    },
    {
      code: 3743,
      title: "RAILROAD EQUIPMENT"
    },
    {
      code: 3751,
      title: "MOTORCYCLES, BICYCLES & PARTS"
    },
    {
      code: 3760,
      title: "GUIDED MISSILES & SPACE VEHICLES & PARTS"
    },
    {
      code: 3790,
      title: "MISCELLANEOUS TRANSPORTATION EQUIPMENT"
    },
    {
      code: 3812,
      title: "SEARCH, DETECTION, NAVAGATION, GUIDANCE, AERONAUTICAL SYS"
    },
    {
      code: 3821,
      title: "LABORATORY APPARATUS & FURNITURE"
    },
    {
      code: 3822,
      title: "AUTO CONTROLS FOR REGULATING RESIDENTIAL & COMML ENVIRONMENTS"
    },
    {
      code: 3823,
      title: "INDUSTRIAL INSTRUMENTS FOR MEASUREMENT, DISPLAY, AND CONTROL"
    },
    {
      code: 3824,
      title: "TOTALIZING FLUID METERS & COUNTING DEVICES"
    },
    {
      code: 3825,
      title: "INSTRUMENTS FOR MEAS & TESTING OF ELECTRICITY & ELEC SIGNALS"
    },
    {
      code: 3826,
      title: "LABORATORY ANALYTICAL INSTRUMENTS"
    },
    {
      code: 3827,
      title: "OPTICAL INSTRUMENTS & LENSES"
    },
    {
      code: 3829,
      title: "MEASURING & CONTROLLING DEVICES, NEC"
    },
    {
      code: 3841,
      title: "SURGICAL & MEDICAL INSTRUMENTS & APPARATUS"
    },
    {
      code: 3842,
      title: "ORTHOPEDIC, PROSTHETIC & SURGICAL APPLIANCES & SUPPLIES"
    },
    {
      code: 3843,
      title: "DENTAL EQUIPMENT & SUPPLIES"
    },
    {
      code: 3844,
      title: "X-RAY APPARATUS & TUBES & RELATED IRRADIATION APPARATUS"
    },
    {
      code: 3845,
      title: "ELECTROMEDICAL & ELECTROTHERAPEUTIC APPARATUS"
    },
    {
      code: 3851,
      title: "OPHTHALMIC GOODS"
    },
    {
      code: 3861,
      title: "PHOTOGRAPHIC EQUIPMENT & SUPPLIES"
    },
    {
      code: 3873,
      title: "WATCHES, CLOCKS, CLOCKWORK OPERATED DEVICES/PARTS"
    },
    {
      code: 3910,
      title: "JEWELRY, SILVERWARE & PLATED WARE"
    },
    {
      code: 3911,
      title: "JEWELRY, PRECIOUS METAL"
    },
    {
      code: 3931,
      title: "MUSICAL INSTRUMENTS"
    },
    {
      code: 3942,
      title: "DOLLS & STUFFED TOYS"
    },
    {
      code: 3944,
      title: "GAMES, TOYS & CHILDREN'S VEHICLES (NO DOLLS & BICYCLES)"
    },
    {
      code: 3949,
      title: "SPORTING & ATHLETIC GOODS, NEC"
    },
    {
      code: 3950,
      title: "PENS, PENCILS & OTHER ARTISTS' MATERIALS"
    },
    {
      code: 3960,
      title: "COSTUME JEWELRY & NOVELTIES"
    },
    {
      code: 3990,
      title: "MISCELLANEOUS MANUFACTURING INDUSTRIES"
    },
    {
      code: 4011,
      title: "RAILROADS, LINE-HAUL OPERATING"
    },
    {
      code: 4013,
      title: "RAILROAD SWITCHING & TERMINAL ESTABLISHMENTS"
    },
    {
      code: 4100,
      title: "LOCAL & SUBURBAN TRANSIT & INTERURBAN HWY PASSENGER TRANS"
    },
    {
      code: 4210,
      title: "TRUCKING & COURIER SERVICES (NO AIR)"
    },
    {
      code: 4213,
      title: "TRUCKING (NO LOCAL)"
    },
    {
      code: 4220,
      title: "PUBLIC WAREHOUSING & STORAGE"
    },
    {
      code: 4231,
      title: "TERMINAL MAINTENANCE FACILITIES FOR MOTOR FREIGHT TRANSPORT"
    },
    {
      code: 4400,
      title: "WATER TRANSPORTATION"
    },
    {
      code: 4412,
      title: "DEEP SEA FOREIGN TRANSPORTATION OF FREIGHT"
    },
    {
      code: 4512,
      title: "AIR TRANSPORTATION, SCHEDULED"
    },
    {
      code: 4513,
      title: "AIR COURIER SERVICES"
    },
    {
      code: 4522,
      title: "AIR TRANSPORTATION, NONSCHEDULED"
    },
    {
      code: 4581,
      title: "AIRPORTS, FLYING FIELDS & AIRPORT TERMINAL SERVICES"
    },
    {
      code: 4610,
      title: "PIPE LINES (NO NATURAL GAS)"
    },
    {
      code: 4700,
      title: "TRANSPORTATION SERVICES"
    },
    {
      code: 4731,
      title: "ARRANGEMENT OF TRANSPORTATION OF FREIGHT & CARGO"
    },
    {
      code: 4812,
      title: "RADIOTELEPHONE COMMUNICATIONS"
    },
    {
      code: 4813,
      title: "TELEPHONE COMMUNICATIONS (NO RADIOTELEPHONE)"
    },
    {
      code: 4822,
      title: "TELEGRAPH & OTHER MESSAGE COMMUNICATIONS"
    },
    {
      code: 4832,
      title: "RADIO BROADCASTING STATIONS"
    },
    {
      code: 4833,
      title: "TELEVISION BROADCASTING STATIONS"
    },
    {
      code: 4841,
      title: "CABLE & OTHER PAY TELEVISION SERVICES"
    },
    {
      code: 4899,
      title: "COMMUNICATIONS SERVICES, NEC"
    },
    {
      code: 4900,
      title: "ELECTRIC, GAS & SANITARY SERVICES"
    },
    {
      code: 4911,
      title: "ELECTRIC SERVICES"
    },
    {
      code: 4922,
      title: "NATURAL GAS TRANSMISSION"
    },
    {
      code: 4923,
      title: "NATURAL GAS TRANSMISISON & DISTRIBUTION"
    },
    {
      code: 4924,
      title: "NATURAL GAS DISTRIBUTION"
    },
    {
      code: 4931,
      title: "ELECTRIC & OTHER SERVICES COMBINED"
    },
    {
      code: 4932,
      title: "GAS & OTHER SERVICES COMBINED"
    },
    {
      code: 4941,
      title: "WATER SUPPLY"
    },
    {
      code: 4950,
      title: "SANITARY SERVICES"
    },
    {
      code: 4953,
      title: "REFUSE SYSTEMS"
    },
    {
      code: 4955,
      title: "HAZARDOUS WASTE MANAGEMENT"
    },
    {
      code: 4961,
      title: "STEAM & AIR-CONDITIONING SUPPLY"
    },
    {
      code: 4991,
      title: "COGENERATION SERVICES & SMALL POWER PRODUCERS"
    },
    {
      code: 5000,
      title: "WHOLESALE-DURABLE GOODS"
    },
    {
      code: 5010,
      title: "WHOLESALE-MOTOR VEHICLES & MOTOR VEHICLE PARTS & SUPPLIES"
    },
    {
      code: 5013,
      title: "WHOLESALE-MOTOR VEHICLE SUPPLIES & NEW PARTS"
    },
    {
      code: 5020,
      title: "WHOLESALE-FURNITURE & HOME FURNISHINGS"
    },
    {
      code: 5030,
      title: "WHOLESALE-LUMBER & OTHER CONSTRUCTION MATERIALS"
    },
    {
      code: 5031,
      title: "WHOLESALE-LUMBER, PLYWOOD, MILLWORK & WOOD PANELS"
    },
    {
      code: 5040,
      title: "WHOLESALE-PROFESSIONAL & COMMERCIAL EQUIPMENT & SUPPLIES"
    },
    {
      code: 5045,
      title: "WHOLESALE-COMPUTERS & PERIPHERAL EQUIPMENT & SOFTWARE"
    },
    {
      code: 5047,
      title: "WHOLESALE-MEDICAL, DENTAL & HOSPITAL EQUIPMENT & SUPPLIES"
    },
    {
      code: 5050,
      title: "WHOLESALE-METALS & MINERALS (NO PETROLEUM)"
    },
    {
      code: 5051,
      title: "WHOLESALE-METALS SERVICE CENTERS & OFFICES"
    },
    {
      code: 5063,
      title: "WHOLESALE-ELECTRICAL APPARATUS & EQUIPMENT, WIRING SUPPLIES"
    },
    {
      code: 5064,
      title: "WHOLESALE-ELECTRICAL APPLIANCES, TV & RADIO SETS"
    },
    {
      code: 5065,
      title: "WHOLESALE-ELECTRONIC PARTS & EQUIPMENT, NEC"
    },
    {
      code: 5070,
      title: "WHOLESALE-HARDWARE & PLUMBING & HEATING EQUIPMENT & SUPPLIES"
    },
    {
      code: 5072,
      title: "WHOLESALE-HARDWARE"
    },
    {
      code: 5080,
      title: "WHOLESALE-MACHINERY, EQUIPMENT & SUPPLIES"
    },
    {
      code: 5082,
      title: "WHOLESALE-CONSTRUCTION & MINING (NO PETRO) MACHINERY & EQUIP"
    },
    {
      code: 5084,
      title: "WHOLESALE-INDUSTRIAL MACHINERY & EQUIPMENT"
    },
    {
      code: 5090,
      title: "WHOLESALE-MISC DURABLE GOODS"
    },
    {
      code: 5094,
      title: "WHOLESALE-JEWELRY, WATCHES, PRECIOUS STONES & METALS"
    },
    {
      code: 5099,
      title: "WHOLESALE-DURABLE GOODS, NEC"
    },
    {
      code: 5110,
      title: "WHOLESALE-PAPER & PAPER PRODUCTS"
    },
    {
      code: 5122,
      title: "WHOLESALE-DRUGS, PROPRIETARIES & DRUGGISTS' SUNDRIES"
    },
    {
      code: 5130,
      title: "WHOLESALE-APPAREL, PIECE GOODS & NOTIONS"
    },
    {
      code: 5140,
      title: "WHOLESALE-GROCERIES & RELATED PRODUCTS"
    },
    {
      code: 5141,
      title: "WHOLESALE-GROCERIES, GENERAL LINE"
    },
    {
      code: 5150,
      title: "WHOLESALE-FARM PRODUCT RAW MATERIALS"
    },
    {
      code: 5160,
      title: "WHOLESALE-CHEMICALS & ALLIED PRODUCTS"
    },
    {
      code: 5171,
      title: "WHOLESALE-PETROLEUM BULK STATIONS & TERMINALS"
    },
    {
      code: 5172,
      title: "WHOLESALE-PETROLEUM & PETROLEUM PRODUCTS (NO BULK STATIONS)"
    },
    {
      code: 5180,
      title: "WHOLESALE-BEER, WINE & DISTILLED ALCOHOLIC BEVERAGES"
    },
    {
      code: 5190,
      title: "WHOLESALE-MISCELLANEOUS NONDURABLE GOODS"
    },
    {
      code: 5200,
      title: "RETAIL-BUILDING MATERIALS, HARDWARE, GARDEN SUPPLY"
    },
    {
      code: 5211,
      title: "RETAIL-LUMBER & OTHER BUILDING MATERIALS DEALERS"
    },
    {
      code: 5271,
      title: "RETAIL-MOBILE HOME DEALERS"
    },
    {
      code: 5311,
      title: "RETAIL-DEPARTMENT STORES"
    },
    {
      code: 5331,
      title: "RETAIL-VARIETY STORES"
    },
    {
      code: 5399,
      title: "RETAIL-MISC GENERAL MERCHANDISE STORES"
    },
    {
      code: 5400,
      title: "RETAIL-FOOD STORES"
    },
    {
      code: 5411,
      title: "RETAIL-GROCERY STORES"
    },
    {
      code: 5412,
      title: "RETAIL-CONVENIENCE STORES"
    },
    {
      code: 5500,
      title: "RETAIL-AUTO DEALERS & GASOLINE STATIONS"
    },
    {
      code: 5531,
      title: "RETAIL-AUTO & HOME SUPPLY STORES"
    },
    {
      code: 5600,
      title: "RETAIL-APPAREL & ACCESSORY STORES"
    },
    {
      code: 5621,
      title: "RETAIL-WOMEN'S CLOTHING STORES"
    },
    {
      code: 5651,
      title: "RETAIL-FAMILY CLOTHING STORES"
    },
    {
      code: 5661,
      title: "RETAIL-SHOE STORES"
    },
    {
      code: 5700,
      title: "RETAIL-HOME FURNITURE, FURNISHINGS & EQUIPMENT STORES"
    },
    {
      code: 5712,
      title: "RETAIL-FURNITURE STORES"
    },
    {
      code: 5731,
      title: "RETAIL-RADIO, TV & CONSUMER ELECTRONICS STORES"
    },
    {
      code: 5734,
      title: "RETAIL-COMPUTER & COMPUTER SOFTWARE STORES"
    },
    {
      code: 5735,
      title: "RETAIL-RECORD & PRERECORDED TAPE STORES"
    },
    {
      code: 5810,
      title: "RETAIL-EATING & DRINKING PLACES"
    },
    {
      code: 5812,
      title: "RETAIL-EATING PLACES"
    },
    {
      code: 5900,
      title: "RETAIL-MISCELLANEOUS RETAIL"
    },
    {
      code: 5912,
      title: "RETAIL-DRUG STORES AND PROPRIETARY STORES"
    },
    {
      code: 5940,
      title: "RETAIL-MISCELLANEOUS SHOPPING GOODS STORES"
    },
    {
      code: 5944,
      title: "RETAIL-JEWELRY STORES"
    },
    {
      code: 5945,
      title: "RETAIL-HOBBY, TOY & GAME SHOPS"
    },
    {
      code: 5960,
      title: "RETAIL-NONSTORE RETAILERS"
    },
    {
      code: 5961,
      title: "RETAIL-CATALOG & MAIL-ORDER HOUSES"
    },
    {
      code: 5990,
      title: "RETAIL-RETAIL STORES, NEC"
    },
    {
      code: 6021,
      title: "NATIONAL COMMERCIAL BANKS"
    },
    {
      code: 6022,
      title: "STATE COMMERCIAL BANKS"
    },
    {
      code: 6029,
      title: "COMMERCIAL BANKS, NEC"
    },
    {
      code: 6035,
      title: "SAVINGS INSTITUTION, FEDERALLY CHARTERED"
    },
    {
      code: 6036,
      title: "SAVINGS INSTITUTIONS, NOT FEDERALLY CHARTERED"
    },
    {
      code: 6099,
      title: "FUNCTIONS RELATED TO DEPOSITORY BANKING, NEC"
    },
    {
      code: 6111,
      title: "FEDERAL & FEDERALLY-SPONSORED CREDIT AGENCIES"
    },
    {
      code: 6141,
      title: "PERSONAL CREDIT INSTITUTIONS"
    },
    {
      code: 6153,
      title: "SHORT-TERM BUSINESS CREDIT INSTITUTIONS"
    },
    {
      code: 6159,
      title: "MISCELLANEOUS BUSINESS CREDIT INSTITUTION"
    },
    {
      code: 6162,
      title: "MORTGAGE BANKERS & LOAN CORRESPONDENTS"
    },
    {
      code: 6163,
      title: "LOAN BROKERS"
    },
    {
      code: 6172,
      title: "FINANCE LESSORS"
    },
    {
      code: 6189,
      title: "ASSET-BACKED SECURITIES"
    },
    {
      code: 6199,
      title: "FINANCE SERVICES"
    },
    {
      code: 6200,
      title: "SECURITY & COMMODITY BROKERS, DEALERS, EXCHANGES & SERVICES"
    },
    {
      code: 6211,
      title: "SECURITY BROKERS, DEALERS & FLOTATION COMPANIES"
    },
    {
      code: 6221,
      title: "COMMODITY CONTRACTS BROKERS & DEALERS"
    },
    {
      code: 6282,
      title: "INVESTMENT ADVICE"
    },
    {
      code: 6311,
      title: "LIFE INSURANCE"
    },
    {
      code: 6321,
      title: "ACCIDENT & HEALTH INSURANCE"
    },
    {
      code: 6324,
      title: "HOSPITAL & MEDICAL SERVICE PLANS"
    },
    {
      code: 6331,
      title: "FIRE, MARINE & CASUALTY INSURANCE"
    },
    {
      code: 6351,
      title: "SURETY INSURANCE"
    },
    {
      code: 6361,
      title: "TITLE INSURANCE"
    },
    {
      code: 6399,
      title: "INSURANCE CARRIERS, NEC"
    },
    {
      code: 6411,
      title: "INSURANCE AGENTS, BROKERS & SERVICE"
    },
    {
      code: 6500,
      title: "REAL ESTATE"
    },
    {
      code: 6510,
      title: "REAL ESTATE OPERATORS (NO DEVELOPERS) & LESSORS"
    },
    {
      code: 6512,
      title: "OPERATORS OF NONRESIDENTIAL BUILDINGS"
    },
    {
      code: 6513,
      title: "OPERATORS OF APARTMENT BUILDINGS"
    },
    {
      code: 6519,
      title: "LESSORS OF REAL PROPERTY, NEC"
    },
    {
      code: 6531,
      title: "REAL ESTATE AGENTS & MANAGERS (FOR OTHERS)"
    },
    {
      code: 6532,
      title: "REAL ESTATE DEALERS (FOR THEIR OWN ACCOUNT)"
    },
    {
      code: 6552,
      title: "LAND SUBDIVIDERS & DEVELOPERS (NO CEMETERIES)"
    },
    {
      code: 6770,
      title: "BLANK CHECKS"
    },
    {
      code: 6792,
      title: "OIL ROYALTY TRADERS"
    },
    {
      code: 6794,
      title: "PATENT OWNERS & LESSORS"
    },
    {
      code: 6795,
      title: "MINERAL ROYALTY TRADERS"
    },
    {
      code: 6798,
      title: "REAL ESTATE INVESTMENT TRUSTS"
    },
    {
      code: 6799,
      title: "INVESTORS, NEC"
    },
    {
      code: 7000,
      title: "HOTELS, ROOMING HOUSES, CAMPS & OTHER LODGING PLACES"
    },
    {
      code: 7011,
      title: "HOTELS & MOTELS"
    },
    {
      code: 7200,
      title: "SERVICES-PERSONAL SERVICES"
    },
    {
      code: 7310,
      title: "SERVICES-ADVERTISING"
    },
    {
      code: 7311,
      title: "SERVICES-ADVERTISING AGENCIES"
    },
    {
      code: 7320,
      title: "SERVICES-CONSUMER CREDIT REPORTING, COLLECTION AGENCIES"
    },
    {
      code: 7330,
      title: "SERVICES-MAILING, REPRODUCTION, COMMERCIAL ART & PHOTOGRAPHY"
    },
    {
      code: 7331,
      title: "SERVICES-DIRECT MAIL ADVERTISING SERVICES"
    },
    {
      code: 7340,
      title: "SERVICES-TO DWELLINGS & OTHER BUILDINGS"
    },
    {
      code: 7350,
      title: "SERVICES-MISCELLANEOUS EQUIPMENT RENTAL & LEASING"
    },
    {
      code: 7359,
      title: "SERVICES-EQUIPMENT RENTAL & LEASING, NEC"
    },
    {
      code: 7361,
      title: "SERVICES-EMPLOYMENT AGENCIES"
    },
    {
      code: 7363,
      title: "SERVICES-HELP SUPPLY SERVICES"
    },
    {
      code: 7370,
      title: "SERVICES-COMPUTER PROGRAMMING, DATA PROCESSING, ETC."
    },
    {
      code: 7371,
      title: "SERVICES-COMPUTER PROGRAMMING SERVICES"
    },
    {
      code: 7372,
      title: "SERVICES-PREPACKAGED SOFTWARE"
    },
    {
      code: 7373,
      title: "SERVICES-COMPUTER INTEGRATED SYSTEMS DESIGN"
    },
    {
      code: 7374,
      title: "SERVICES-COMPUTER PROCESSING & DATA PREPARATION"
    },
    {
      code: 7377,
      title: "SERVICES-COMPUTER RENTAL & LEASING"
    },
    {
      code: 7380,
      title: "SERVICES-MISCELLANEOUS BUSINESS SERVICES"
    },
    {
      code: 7381,
      title: "SERVICES-DETECTIVE, GUARD & ARMORED CAR SERVICES"
    },
    {
      code: 7384,
      title: "SERVICES-PHOTOFINISHING LABORATORIES"
    },
    {
      code: 7385,
      title: "SERVICES-TELEPHONE INTERCONNECT SYSTEMS"
    },
    {
      code: 7389,
      title: "SERVICES-BUSINESS SERVICES, NEC"
    },
    {
      code: 7500,
      title: "SERVICES-AUTOMOTIVE REPAIR, SERVICES & PARKING"
    },
    {
      code: 7510,
      title: "SERVICES-AUTO RENTAL & LEASING (NO DRIVERS)"
    },
    {
      code: 7600,
      title: "SERVICES-MISCELLANEOUS REPAIR SERVICES"
    },
    {
      code: 7812,
      title: "SERVICES-MOTION PICTURE & VIDEO TAPE PRODUCTION"
    },
    {
      code: 7819,
      title: "SERVICES-ALLIED TO MOTION PICTURE PRODUCTION"
    },
    {
      code: 7822,
      title: "SERVICES-MOTION PICTURE & VIDEO TAPE DISTRIBUTION"
    },
    {
      code: 7829,
      title: "SERVICES-ALLIED TO MOTION PICTURE DISTRIBUTION"
    },
    {
      code: 7830,
      title: "SERVICES-MOTION PICTURE THEATERS"
    },
    {
      code: 7841,
      title: "SERVICES-VIDEO TAPE RENTAL"
    },
    {
      code: 7900,
      title: "SERVICES-AMUSEMENT & RECREATION SERVICES"
    },
    {
      code: 7948,
      title: "SERVICES-RACING, INCLUDING TRACK OPERATION"
    },
    {
      code: 7990,
      title: "SERVICES-MISCELLANEOUS AMUSEMENT & RECREATION"
    },
    {
      code: 7997,
      title: "SERVICES-MEMBERSHIP SPORTS & RECREATION CLUBS"
    },
    {
      code: 8000,
      title: "SERVICES-HEALTH SERVICES"
    },
    {
      code: 8011,
      title: "SERVICES-OFFICES & CLINICS OF DOCTORS OF MEDICINE"
    },
    {
      code: 8050,
      title: "SERVICES-NURSING & PERSONAL CARE FACILITIES"
    },
    {
      code: 8051,
      title: "SERVICES-SKILLED NURSING CARE FACILITIES"
    },
    {
      code: 8060,
      title: "SERVICES-HOSPITALS"
    },
    {
      code: 8062,
      title: "SERVICES-GENERAL MEDICAL & SURGICAL HOSPITALS, NEC"
    },
    {
      code: 8071,
      title: "SERVICES-MEDICAL LABORATORIES"
    },
    {
      code: 8082,
      title: "SERVICES-HOME HEALTH CARE SERVICES"
    },
    {
      code: 8090,
      title: "SERVICES-MISC HEALTH & ALLIED SERVICES, NEC"
    },
    {
      code: 8093,
      title: "SERVICES-SPECIALTY OUTPATIENT FACILITIES, NEC"
    },
    {
      code: 8111,
      title: "SERVICES-LEGAL SERVICES"
    },
    {
      code: 8200,
      title: "SERVICES-EDUCATIONAL SERVICES"
    },
    {
      code: 8300,
      title: "SERVICES-SOCIAL SERVICES"
    },
    {
      code: 8351,
      title: "SERVICES-CHILD DAY CARE SERVICES"
    },
    {
      code: 8600,
      title: "SERVICES-MEMBERSHIP ORGANIZATIONS"
    },
    {
      code: 8700,
      title: "SERVICES-ENGINEERING, ACCOUNTING, RESEARCH, MANAGEMENT"
    },
    {
      code: 8711,
      title: "SERVICES-ENGINEERING SERVICES"
    },
    {
      code: 8731,
      title: "SERVICES-COMMERCIAL PHYSICAL & BIOLOGICAL RESEARCH"
    },
    {
      code: 8734,
      title: "SERVICES-TESTING LABORATORIES"
    },
    {
      code: 8741,
      title: "SERVICES-MANAGEMENT SERVICES"
    },
    {
      code: 8742,
      title: "SERVICES-MANAGEMENT CONSULTING SERVICES"
    },
    {
      code: 8744,
      title: "SERVICES-FACILITIES SUPPORT MANAGEMENT SERVICES"
    },
    {
      code: 8880,
      title: "AMERICAN DEPOSITARY RECEIPTS"
    },
    {
      code: 8888,
      title: "FOREIGN GOVERNMENTS"
    },
    {
      code: 8900,
      title: "SERVICES-SERVICES, NEC"
    },
    {
      code: 9721,
      title: "INTERNATIONAL AFFAIRS"
    },
    {
      code: 9995,
      title: "NON-OPERATING ESTABLISHMENTS"
    }
  ]