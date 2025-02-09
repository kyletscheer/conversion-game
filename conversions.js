const conversions = {
    length: {
        name: "Length",
        options: {
            milesToKm: {
                name: "Miles → Kilometers",
                generate: () => {
                    const value = Math.floor(Math.random() * 100) + 1;
                    return {
                        question: `${value} miles = ___ km`,
                        answer: value * 1.60934,
                    };
                },
            },
            kmToMiles: {
                name: "Kilometers → Miles",
                generate: () => {
                    const value = Math.floor(Math.random() * 100) + 1;
                    return {
                        question: `${value} km = ___ miles`,
                        answer: value / 1.60934,
                    };
                },
            },
            inchesToCm: {
                name: "Inches → Centimeters",
                generate: () => {
                    const value = Math.floor(Math.random() * 100) + 1; // Range: 1 to 100
                    return {
                        question: `${value} inches = ___ cm`,
                        answer: value * 2.54,
                    };
                },
            },
            cmToInches: {
                name: "Centimeters → Inches",
                generate: () => {
                    const value = Math.floor(Math.random() * 250) + 1; // Range: 1 to 250
                    return {
                        question: `${value} cm = ___ inches`,
                        answer: value / 2.54,
                    };
                },
            },
            yardsToMeters: {
                name: "Yards → Meters",
                generate: () => {
                    const value = Math.floor(Math.random() * 100) + 1; // Range: 1 to 100
                    return {
                        question: `${value} yards = ___ meters`,
                        answer: value * 0.9144,
                    };
                },
            },
            metersToYards: {
                name: "Meters → Yards",
                generate: () => {
                    const value = Math.floor(Math.random() * 100) + 1; // Range: 1 to 100
                    return {
                        question: `${value} meters = ___ yards`,
                        answer: value / 0.9144,
                    };
                },
            },
            metersToFeet: {
                name: "Meters → Feet",
                generate: () => {
                    const value = Math.floor(Math.random() * 100) + 1; // Range: 1 to 100 meters
                    return {
                        question: `${value} meters = ___ feet`,
                        answer: value * 3.28084, // 1 meter = 3.28084 feet
                    };
                },
            },
            feetToMeters: {
                name: "Feet → Meters",
                generate: () => {
                    const value = Math.floor(Math.random() * 300) + 1; // Range: 1 to 300 feet
                    return {
                        question: `${value} feet = ___ meters`,
                        answer: value / 3.28084, // 1 foot = 0.3048 meters
                    };
                },
            },
            nauticalMilesToKm: {
                name: "Nautical Miles → Kilometers",
                generate: () => {
                    const value = Math.floor(Math.random() * 500) + 1; // Range: 1 to 500
                    return {
                        question: `${value} nautical miles = ___ km`,
                        answer: value * 1.852,
                    };
                },
            },
            kmToNauticalMiles: {
                name: "Kilometers → Nautical Miles",
                generate: () => {
                    const value = Math.floor(Math.random() * 500) + 1; // Range: 1 to 500
                    return {
                        question: `${value} km = ___ nautical miles`,
                        answer: value / 1.852,
                    };
                },
            },
            nauticalMilesToMiles: {
                name: "Nautical Miles → Miles",
                generate: () => {
                    const value = Math.floor(Math.random() * 50) + 1;
                    return {
                        question: `${value} nautical miles = ___ miles`,
                        answer: value * 1.15078,
                    };
                },
            },
            milesToNauticalMiles: {
                name: "Miles → Nautical Miles",
                generate: () => {
                    const value = Math.floor(Math.random() * 50) + 1;
                    return {
                        question: `${value} miles = ___ nautical miles`,
                        answer: value / 1.15078,
                    };
                },
            },
        }
    },
    temperature: {
        name: "Temperature",
        options: {
            cToF: {
                name: "Celsius → Fahrenheit",
                generate: () => {
                    const value = Math.floor(Math.random() * 100) - 50; // Range: -50 to 50
                    return {
                        question: `${value} °C = ___ °F`,
                        answer: (value * 9) / 5 + 32,
                    };
                },
            },
            fToC: {
                name: "Fahrenheit → Celsius",
                generate: () => {
                    const value = Math.floor(Math.random() * 180) - 30; // Range: -30 to 150
                    return {
                        question: `${value} °F = ___ °C`,
                        answer: ((value - 32) * 5) / 9,
                    };
                },
            },
            cToK: {
                name: "Celsius → Kelvin",
                generate: () => {
                    const value = Math.floor(Math.random() * 100) - 50; // Range: -50 to 50
                    return {
                        question: `${value} °C = ___ K`,
                        answer: value + 273.15,
                    };
                },
            },
            kToC: {
                name: "Kelvin → Celsius",
                generate: () => {
                    const value = Math.floor(Math.random() * 200) + 1; // Range: 1 to 200
                    return {
                        question: `${value} K = ___ °C`,
                        answer: value - 273.15,
                    };
                },
            },
            fToK: {
                name: "Fahrenheit → Kelvin",
                generate: () => {
                    const value = Math.floor(Math.random() * 180) - 30; // Range: -30 to 150
                    return {
                        question: `${value} °F = ___ K`,
                        answer: ((value - 32) * 5) / 9 + 273.15,
                    };
                },
            },
            kToF: {
                name: "Kelvin → Fahrenheit",
                generate: () => {
                    const value = Math.floor(Math.random() * 200) + 1; // Range: 1 to 200
                    return {
                        question: `${value} K = ___ °F`,
                        answer: ((value - 273.15) * 9) / 5 + 32,
                    };
                },
            },
        }
    },
    mass: {
        name: "Mass",
        options: {
            poundsToKg: {
                name: "Pounds → Kilograms",
                generate: () => {
                    const value = Math.floor(Math.random() * 300) + 1; // Range: 1 to 300
                    return {
                        question: `${value} lbs = ___ kg`,
                        answer: value * 0.453592,
                    };
                },
            },
            kgToPounds: {
                name: "Kilograms → Pounds",
                generate: () => {
                    const value = Math.floor(Math.random() * 200) + 1; // Range: 1 to 200
                    return {
                        question: `${value} kg = ___ lbs`,
                        answer: value / 0.453592,
                    };
                },
            },
            ouncesToGrams: {
                name: "Ounces → Grams",
                generate: () => {
                    const value = Math.floor(Math.random() * 200) + 1; // Range: 1 to 200
                    return {
                        question: `${value} oz = ___ g`,
                        answer: value * 28.3495,
                    };
                },
            },
            gramsToOunces: {
                name: "Grams → Ounces",
                generate: () => {
                    const value = Math.floor(Math.random() * 500) + 1; // Range: 1 to 500
                    return {
                        question: `${value} g = ___ oz`,
                        answer: value / 28.3495,
                    };
                },
            },
            stonesToKg: {
                name: "Stones → Kilograms",
                generate: () => {
                    const value = Math.floor(Math.random() * 50) + 1; // Range: 1 to 50
                    return {
                        question: `${value} st = ___ kg`,
                        answer: value * 6.35029,
                    };
                },
            },
            kgToStones: {
                name: "Kilograms → Stones",
                generate: () => {
                    const value = Math.floor(Math.random() * 250) + 1; // Range: 1 to 250
                    return {
                        question: `${value} kg = ___ st`,
                        answer: value / 6.35029,
                    };
                },
            },
        }
    },
    volume: {
        name: "Volume",
        options: {
            // Volume Conversions
            gallonsToLiters: {
                name: "Gallons → Liters",
                generate: () => {
                    const value = Math.floor(Math.random() * 50) + 1; // Range: 1 to 50
                    return {
                        question: `${value} gallons = ___ liters`,
                        answer: value * 3.78541,
                    };
                },
            },

            litersToGallons: {
                name: "Liters → Gallons",
                generate: () => {
                    const value = Math.floor(Math.random() * 200) + 1; // Range: 1 to 200
                    return {
                        question: `${value} liters = ___ gallons`,
                        answer: value / 3.78541,
                    };
                },
            },
            cubicInchesToCubicCentimeters: {
                name: "Cubic Inches → Cubic Centimeters",
                generate: () => {
                    const value = Math.floor(Math.random() * 100) + 1; // Range: 1 to 100
                    return {
                        question: `${value} cubic inches = ___ cubic cm`,
                        answer: value * 16.387,
                    };
                },
            },

            cubicCentimetersToCubicInches: {
                name: "Cubic Centimeters → Cubic Inches",
                generate: () => {
                    const value = Math.floor(Math.random() * 1000) + 1; // Range: 1 to 1000
                    return {
                        question: `${value} cubic cm = ___ cubic inches`,
                        answer: value / 16.387,
                    };
                },
            },
            quartsToLiters: {
                name: "Quarts → Liters",
                generate: () => {
                    const value = Math.floor(Math.random() * 50) + 1; // Range: 1 to 50
                    return {
                        question: `${value} quarts = ___ liters`,
                        answer: value * 0.946353,
                    };
                },
            },
            litersToQuarts: {
                name: "Liters → Quarts",
                generate: () => {
                    const value = Math.floor(Math.random() * 50) + 1; // Range: 1 to 50
                    return {
                        question: `${value} liters = ___ quarts`,
                        answer: value / 0.946353,
                    };
                },
            },
            fluidOuncesToMilliliters: {
                name: "Fluid Ounces → Milliliters",
                generate: () => {
                    const value = Math.floor(Math.random() * 50) + 1; // Range: 1 to 50
                    return {
                        question: `${value} fluid ounces = ___ milliliters`,
                        answer: value * 29.5735,
                    };
                },
            },

            millilitersToFluidOunces: {
                name: "Milliliters → Fluid Ounces",
                generate: () => {
                    const value = Math.floor(Math.random() * 500) + 1; // Range: 1 to 500
                    return {
                        question: `${value} milliliters = ___ fluid ounces`,
                        answer: value / 29.5735,
                    };
                },
            },
        }
    },
    area: {
        name: "Area",
        options: {
            // Area Conversions
            squareFeetToSquareMeters: {
                name: "Square Feet → Square Meters",
                generate: () => {
                    const value = Math.floor(Math.random() * 1000) + 1; // Range: 1 to 1000
                    return {
                        question: `${value} sq ft = ___ sq m`,
                        answer: value * 0.092903,
                    };
                },
            },
            squareMetersToSquareFeet: {
                name: "Square Meters → Square Feet",
                generate: () => {
                    const value = Math.floor(Math.random() * 500) + 1; // Range: 1 to 500
                    return {
                        question: `${value} sq m = ___ sq ft`,
                        answer: value / 0.092903,
                    };
                },
            },
            acresToSquareMeters: {
                name: "Acres → Square Meters",
                generate: () => {
                    const value = Math.floor(Math.random() * 100) + 1; // Range: 1 to 100
                    return {
                        question: `${value} acres = ___ sq m`,
                        answer: value * 4046.86,
                    };
                },
            },
            squareMetersToAcres: {
                name: "Square Meters → Acres",
                generate: () => {
                    const value = Math.floor(Math.random() * 5000) + 1; // Range: 1 to 5000
                    return {
                        question: `${value} sq m = ___ acres`,
                        answer: value / 4046.86,
                    };
                },
            },
            squareKilometersToSquareMiles: {
                name: "Square Kilometers → Square Miles",
                generate: () => {
                    const value = Math.floor(Math.random() * 50) + 1; // Range: 1 to 50
                    return {
                        question: `${value} sq km = ___ sq miles`,
                        answer: value * 0.386102,
                    };
                },
            },
            squareMilesToSquareKilometers: {
                name: "Square Miles → Square Kilometers",
                generate: () => {
                    const value = Math.floor(Math.random() * 20) + 1; // Range: 1 to 20
                    return {
                        question: `${value} sq miles = ___ sq km`,
                        answer: value / 0.386102,
                    };
                },
            },
        }
    },
    speed: {
        name: "Speed",
        options: {
            // Speed Conversions
            mphToKph: {
                name: "Miles per Hour → Kilometers per Hour",
                generate: () => {
                    const value = Math.floor(Math.random() * 120) + 1; // Range: 1 to 120
                    return {
                        question: `${value} mph = ___ kph`,
                        answer: value * 1.60934,
                    };
                },
            },
            kphToMph: {
                name: "Kilometers per Hour → Miles per Hour",
                generate: () => {
                    const value = Math.floor(Math.random() * 200) + 1; // Range: 1 to 200
                    return {
                        question: `${value} kph = ___ mph`,
                        answer: value / 1.60934,
                    };
                },
            },
            knotsToMph: {
                name: "Knots → Miles per Hour",
                generate: () => {
                    const value = Math.floor(Math.random() * 80) + 1; // Range: 1 to 80
                    return {
                        question: `${value} knots = ___ mph`,
                        answer: value * 1.15078,
                    };
                },
            },
            mphToKnots: {
                name: "Miles per Hour → Knots",
                generate: () => {
                    const value = Math.floor(Math.random() * 120) + 1; // Range: 1 to 120
                    return {
                        question: `${value} mph = ___ knots`,
                        answer: value / 1.15078,
                    };
                },
            },
        }
    },
    time: {
        name: "Time",
        options: {
            secondsToMinutes: {
                name: "Seconds → Minutes",
                generate: () => {
                    const value = Math.floor(Math.random() * 3600) + 1; // Range: 1 to 3600
                    return {
                        question: `${value} seconds = ___ minutes`,
                        answer: value / 60,
                    };
                },
            },
            minutesToSeconds: {
                name: "Minutes → Seconds",
                generate: () => {
                    const value = Math.floor(Math.random() * 60) + 1; // Range: 1 to 60
                    return {
                        question: `${value} minutes = ___ seconds`,
                        answer: value * 60,
                    };
                },
            },
            hoursToMinutes: {
                name: "Hours → Minutes",
                generate: () => {
                    const value = Math.floor(Math.random() * 24) + 1; // Range: 1 to 24
                    return {
                        question: `${value} hours = ___ minutes`,
                        answer: value * 60,
                    };
                },
            },
            minutesToHours: {
                name: "Minutes → Hours",
                generate: () => {
                    const value = Math.floor(Math.random() * 1440) + 1; // Range: 1 to 1440
                    return {
                        question: `${value} minutes = ___ hours`,
                        answer: value / 60,
                    };
                },
            },
            daysToHours: {
                name: "Days → Hours",
                generate: () => {
                    const value = Math.floor(Math.random() * 365) + 1; // Range: 1 to 365
                    return {
                        question: `${value} days = ___ hours`,
                        answer: value * 24,
                    };
                },
            },
            hoursToDays: {
                name: "Hours → Days",
                generate: () => {
                    const value = Math.floor(Math.random() * 720) + 1; // Range: 1 to 720
                    return {
                        question: `${value} hours = ___ days`,
                        answer: value / 24,
                    };
                },
            },
            weeksToDays: {
                name: "Weeks → Days",
                generate: () => {
                    const value = Math.floor(Math.random() * 52) + 1; // Range: 1 to 52
                    return {
                        question: `${value} weeks = ___ days`,
                        answer: value * 7,
                    };
                },
            },
            daysToWeeks: {
                name: "Days → Weeks",
                generate: () => {
                    const value = Math.floor(Math.random() * 365) + 1; // Range: 1 to 365
                    return {
                        question: `${value} days = ___ weeks`,
                        answer: value / 7,
                    };
                },
            },
            monthsToDays: {
                name: "Months → Days",
                generate: () => {
                    const value = Math.floor(Math.random() * 12) + 1; // Range: 1 to 12
                    return {
                        question: `${value} months = ___ days`,
                        answer: value * 30, // Approximation
                    };
                },
            },
            daysToMonths: {
                name: "Days → Months",
                generate: () => {
                    const value = Math.floor(Math.random() * 365) + 1; // Range: 1 to 365
                    return {
                        question: `${value} days = ___ months`,
                        answer: value / 30, // Approximation
                    };
                },
            },
            yearsToDays: {
                name: "Years → Days",
                generate: () => {
                    const value = Math.floor(Math.random() * 100) + 1; // Range: 1 to 100
                    return {
                        question: `${value} years = ___ days`,
                        answer: value * 365, // Approximation
                    };
                },
            },
            daysToYears: {
                name: "Days → Years",
                generate: () => {
                    const value = Math.floor(Math.random() * 36500) + 1; // Range: 1 to 36500
                    return {
                        question: `${value} days = ___ years`,
                        answer: value / 365.25, // Approximation
                    };
                },
            },
        }
    },
};
