// Conversion data with formulas
const conversions = {
  length: {
    name: "Length",
    emoji: "📏",
    color: "blue",
    conversions: {
      milesToKm: {
        name: "Miles → Kilometers",
        formula: "km = miles × 1.60934",
        factor: 1.60934,
        range: [1, 100],
      },
      kmToMiles: {
        name: "Kilometers → Miles",
        formula: "miles = km ÷ 1.60934",
        factor: 1 / 1.60934,
        range: [1, 100],
      },
      inchesToCm: {
        name: "Inches → Centimeters",
        formula: "cm = inches × 2.54",
        factor: 2.54,
        range: [1, 100],
      },
      cmToInches: {
        name: "Centimeters → Inches",
        formula: "inches = cm ÷ 2.54",
        factor: 1 / 2.54,
        range: [1, 250],
      },
      feetToMeters: {
        name: "Feet → Meters",
        formula: "meters = feet ÷ 3.28084",
        factor: 1 / 3.28084,
        range: [1, 300],
      },
      metersToFeet: {
        name: "Meters → Feet",
        formula: "feet = meters × 3.28084",
        factor: 3.28084,
        range: [1, 100],
      },
    },
  },
temperature: {
  name: "Temperature",
  emoji: "🌡️",
  color: "red",
  conversions: {
    cToF: {
      name: "Celsius → Fahrenheit",
      formula: "°F = (°C × 9/5) + 32",
      special: "cToF",
      range: [-40, 50],
    },
    fToC: {
      name: "Fahrenheit → Celsius",
      formula: "°C = (°F - 32) × 5/9",
      special: "fToC",
      range: [-40, 122],
    },
    cToK: {
      name: "Celsius → Kelvin",
      formula: "K = °C + 273.15",
      special: "cToK",
      range: [-40, 50],
    },
    kToC: {
      name: "Kelvin → Celsius",
      formula: "°C = K - 273.15",
      special: "kToC",
      range: [233, 323],
    },
    kToF: {
      name: "Kelvin → Fahrenheit",
      formula: "°F = (K - 273.15) × 9/5 + 32",
      special: "kToF",
      range: [233, 323],
    },
    fToK: {
      name: "Fahrenheit → Kelvin",
      formula: "K = (°F - 32) × 5/9 + 273.15",
      special: "fToK",
      range: [-40, 122],
    },
  },
},
  mass: {
    name: "Mass",
    emoji: "⚖️",
    color: "purple",
    conversions: {
      poundsToKg: {
        name: "Pounds → Kilograms",
        formula: "kg = lbs × 0.453592",
        factor: 0.453592,
        range: [1, 300],
      },
      kgToPounds: {
        name: "Kilograms → Pounds",
        formula: "lbs = kg ÷ 0.453592",
        factor: 1 / 0.453592,
        range: [1, 200],
      },
      ouncesToGrams: {
        name: "Ounces → Grams",
        formula: "g = oz × 28.3495",
        factor: 28.3495,
        range: [1, 200],
      },
      gramsToOunces: {
        name: "Grams → Ounces",
        formula: "oz = g ÷ 28.3495",
        factor: 1 / 28.3495,
        range: [1, 500],
      },
    },
  },
  volume: {
    name: "Volume",
    emoji: "🧪",
    color: "green",
    conversions: {
      gallonsToLiters: {
        name: "Gallons → Liters",
        formula: "L = gal × 3.78541",
        factor: 3.78541,
        range: [1, 50],
      },
      litersToGallons: {
        name: "Liters → Gallons",
        formula: "gal = L ÷ 3.78541",
        factor: 1 / 3.78541,
        range: [1, 200],
      },
      flOzToMl: {
        name: "Fluid Ounces → Milliliters",
        formula: "mL = fl oz × 29.5735",
        factor: 29.5735,
        range: [1, 50],
      },
      mlToFlOz: {
        name: "Milliliters → Fluid Ounces",
        formula: "fl oz = mL ÷ 29.5735",
        factor: 1 / 29.5735,
        range: [1, 500],
      },
    },
  },
  speed: {
    name: "Speed",
    emoji: "🚗",
    color: "yellow",
    conversions: {
      mphToKph: {
        name: "MPH → KPH",
        formula: "kph = mph × 1.60934",
        factor: 1.60934,
        range: [1, 120],
      },
      kphToMph: {
        name: "KPH → MPH",
        formula: "mph = kph ÷ 1.60934",
        factor: 1 / 1.60934,
        range: [1, 200],
      },
    },
  },
  time: {
    name: "Time",
    emoji: "⏰",
    color: "indigo",
    conversions: {
      hoursToMinutes: {
        name: "Hours → Minutes",
        formula: "min = hours × 60",
        factor: 60,
        range: [1, 24],
      },
      minutesToHours: {
        name: "Minutes → Hours",
        formula: "hours = min ÷ 60",
        factor: 1 / 60,
        range: [1, 1440],
      },
      daysToHours: {
        name: "Days → Hours",
        formula: "hours = days × 24",
        factor: 24,
        range: [1, 365],
      },
      hoursToDays: {
        name: "Hours → Days",
        formula: "days = hours ÷ 24",
        factor: 1 / 24,
        range: [1, 720],
      },
    },
  },
  area: {
    name: "Area",
    emoji: "📐",
    color: "pink",
    conversions: {
      sqFtToSqM: {
        name: "Square Feet → Square Meters",
        formula: "sq m = sq ft × 0.092903",
        factor: 0.092903,
        range: [1, 1000],
      },
      sqMToSqFt: {
        name: "Square Meters → Square Feet",
        formula: "sq ft = sq m ÷ 0.092903",
        factor: 1 / 0.092903,
        range: [1, 500],
      },
      acresToSqM: {
        name: "Acres → Square Meters",
        formula: "sq m = acres × 4046.86",
        factor: 4046.86,
        range: [1, 100],
      },
      sqMToAcres: {
        name: "Square Meters → Acres",
        formula: "acres = sq m ÷ 4046.86",
        factor: 1 / 4046.86,
        range: [1, 5000],
      },
    },
  },
  nautical: {
    name: "Nautical",
    emoji: "⚓",
    color: "cyan",
    conversions: {
      nmToKm: {
        name: "Nautical Miles → Kilometers",
        formula: "km = nm × 1.852",
        factor: 1.852,
        range: [1, 500],
      },
      kmToNm: {
        name: "Kilometers → Nautical Miles",
        formula: "nm = km ÷ 1.852",
        factor: 1 / 1.852,
        range: [1, 500],
      },
      nmToMiles: {
        name: "Nautical Miles → Miles",
        formula: "miles = nm × 1.15078",
        factor: 1.15078,
        range: [1, 50],
      },
      milesToNm: {
        name: "Miles → Nautical Miles",
        formula: "nm = miles ÷ 1.15078",
        factor: 1 / 1.15078,
        range: [1, 50],
      },
      knotsToMph: {
        name: "Knots → MPH",
        formula: "mph = knots × 1.15078",
        factor: 1.15078,
        range: [1, 80],
      },
      mphToKnots: {
        name: "MPH → Knots",
        formula: "knots = mph ÷ 1.15078",
        factor: 1 / 1.15078,
        range: [1, 120],
      },
    },
  },
  angle: {
    name: "Angle",
    emoji: "📐",
    color: "indigo",
    conversions: {
      degToRad: {
        name: "Degrees → Radians",
        formula: "radians = degrees × (π / 180)",
        factor: Math.PI / 180,
        range: [1, 360],
      },
      radToDeg: {
        name: "Radians → Degrees",
        formula: "degrees = radians × (180 / π)",
        factor: 180 / Math.PI,
        range: [0.1, 6.28],
      }, // 2*PI approx
      degToGrad: {
        name: "Degrees → Gradians",
        formula: "gradians = degrees × (10 / 9)",
        factor: 10 / 9,
        range: [1, 360],
      },
      gradToDeg: {
        name: "Gradians → Degrees",
        formula: "degrees = gradians × (9 / 10)",
        factor: 9 / 10,
        range: [1, 400],
      },
    },
  },
  data: {
    name: "Data Storage",
    emoji: "💾",
    color: "cyan",
    conversions: {
      bytesToKB: {
        name: "Bytes → Kilobytes",
        formula: "Kilobytes = Bytes ÷ 1024",
        factor: 1 / 1024,
        range: [1024, 1048576],
      }, // 1KB to 1MB in bytes
      kbToMB: {
        name: "Kilobytes → Megabytes",
        formula: "Megabytes = Kilobytes ÷ 1024",
        factor: 1 / 1024,
        range: [1024, 1048576],
      }, // 1MB to 1GB in KB
      mbToGB: {
        name: "Megabytes → Gigabytes",
        formula: "Gigabytes = Megabytes ÷ 1024",
        factor: 1 / 1024,
        range: [1024, 1048576],
      }, // 1GB to 1TB in MB
      bitsToBytes: {
        name: "Bits → Bytes",
        formula: "Bytes = Bits ÷ 8",
        factor: 1 / 8,
        range: [8, 80000],
      },
      bytesToBits: {
        name: "Bytes → Bits",
        formula: "Bits = Bytes × 8",
        factor: 8,
        range: [1, 10000],
      },
    },
  },
  power: {
    name: "Power",
    emoji: "🔋",
    color: "lime",
    conversions: {
      wattsToHp: {
        name: "Watts → Horsepower",
        formula: "Horsepower = Watts ÷ 745.7",
        factor: 1 / 745.7,
        range: [100, 100000],
      },
      hpToWatts: {
        name: "Horsepower → Watts",
        formula: "Watts = Horsepower × 745.7",
        factor: 745.7,
        range: [1, 200],
      },
      wattsToKw: {
        name: "Watts → Kilowatts",
        formula: "Kilowatts = Watts ÷ 1000",
        factor: 1 / 1000,
        range: [100, 50000],
      },
      kwToWatts: {
        name: "Kilowatts → Watts",
        formula: "Watts = Kilowatts × 1000",
        factor: 1000,
        range: [0.1, 50],
      },
      btuPerHrToWatts: {
        name: "BTU/hr → Watts",
        formula: "Watts = BTU/hr × 0.293071",
        factor: 0.293071,
        range: [1000, 100000],
      },
    },
  },
};