const cars = [
  {
    id: 1,
    img: [
      './Porsche 718 Cayman GT4/Porsche 718 Cayman GT4.PNG',
      './Porsche 718 Cayman GT4/Porsche 718 Cayman GT4-full.PNG',
      './Porsche 718 Cayman GT4/1.PNG',
      './Porsche 718 Cayman GT4/2.PNG',
      './Porsche 718 Cayman GT4/3.PNG',
    ],
    name: 'Porsche 718 Cayman GT4',
    dailyPrice: '700',
    mileage: '3k',
    gas: 'Petrol',
    gearType: 'automatic',
    year: '2020',
    drivetrain: 'RWD',
    power: '414',
    engine: '4.0-liter flat-six',
    acceleration: '4.4 seconds',
    max: '301 km/h',
    color: 'silver',
    seats: '2',
    torque: '419 Nm',
    calendar: [],
    equipment: [
      'Porsche Active Suspension Management (PASM) sports suspension with ride height lowered by 30mm',
      'Porsche Torque Vectoring (PTV) with mechanically locking rear differential',
      'Intelligent lightweight construction in aluminium and steel composite',
      'Front wheel arches made of carbon fibre reinforced plastic (CFRP)',
    ],
    description:
      'The Porsche 718 Cayman GT4 is a high-performance sports car that delivers exhilarating driving dynamics. With its powerful 4.0-liter flat-six engine producing 414 horsepower and 419 Nm of torque, it offers impressive acceleration and a top speed of 301 km/h. The car features rear-wheel drive (RWD) and an automatic transmission. It comes with various color options and has seating for two. The GT4 model is known for its track-focused performance and precise handling. Please contact us for availability and more details.',
  },
  {
    id: 2,
    img: [
      './Lamborghini Veneno/Lamborghini Veneno.PNG',
      './Lamborghini Veneno/Lamborghini Veneno-full.png',
      './Lamborghini Veneno/1.PNG',
      './Lamborghini Veneno/2.PNG',
      './Lamborghini Veneno/3.PNG',
    ],

    name: 'Lamborghini Veneno',
    dailyPrice: '40 000',
    mileage: '0.5k',
    gas: 'Petrol',
    gearType: 'automatic',
    year: '2023',
    drivetrain: 'AWD',
    power: '750',
    engine: '6.5-liter V12',
    acceleration: '2.8 seconds',
    max: '355 km/h',
    color: 'orange',
    seats: '2',
    torque: '690 Nm',
    calendar: [],
    equipment: [
      'Carbon-ceramic brakes with fixed calipers monoblock in aluminum with 6 pistons (front) and 4 pistons (rear)',
      'Double wishbone fully independent suspension',
      '4WD with Haldex generation IV, 7 speed ISR, shifting characteristic depending on drive select mode',
    ],
    description:
      'The Lamborghini Veneno is an ultra-exclusive and extreme supercar that pushes the boundaries of performance and design. With its powerful 6.5-liter V12 engine producing 750 horsepower and 690 Nm of torque, it delivers breathtaking acceleration, going from 0 to 100 km/h in just 2.8 seconds and reaching a top speed of 355 km/h. The car features all-wheel drive (AWD) and an automatic transmission. It comes with various color options and has seating for two. The Veneno is a true masterpiece of automotive engineering and a rare gem in the world of supercars. Please contact us for availability and more details.',
  },
  {
    id: 3,
    img: [
      './Audi RS7/Audi RS7.PNG',
      './Audi RS7/Audi RS7-full.PNG',
      './Audi RS7/1.PNG',
      './Audi RS7/2.PNG',
      './Audi RS7/3.PNG',
    ],
    name: 'Audi RS7',
    dailyPrice: '400',
    mileage: '1k',
    gas: 'Petrol',
    gearType: 'automatic',
    year: '2020',
    drivetrain: 'AWD',
    power: '591',
    engine: '4.0-liter V8',
    acceleration: '3.6 seconds',
    max: '205 km/h',
    color: 'green',
    seats: '5',
    torque: '700 Nm',
    calendar: [],
    equipment: [
      'RSDynamic plus package',
      'MGmotorsport sports exhaust system',
      'RS Plus sports suspension with Dynamic Ride Control (DRC)',
      'Dynamic all-wheel steering with rear-axle steering',
    ],
    description:
      'The Audi RS7 is a high-performance luxury sedan that combines power, elegance, and practicality. With its 4.0-liter V8 engine producing 591 horsepower and 800 Nm of torque, it offers exhilarating performance. It can accelerate from 0 to 100 km/h in just 3.6 seconds and has a top speed of 250 km/h (electronically limited). The car features all-wheel drive (AWD) and an automatic transmission. It comes with various color options and has seating for five. The RS7 is a perfect blend of sportiness and comfort, making it an ideal choice for those seeking both performance and versatility. Please contact us for availability and more details.',
  },
  {
    id: 4,
    img: [
      './Audi R8 Performance/Audi R8 Performance.PNG',
      './Audi R8 Performance/Audi R8 Performance-full.PNG',
      './Audi R8 Performance/1.PNG',
      './Audi R8 Performance/2.PNG',
      './Audi R8 Performance/3.PNG',
    ],
    name: 'Audi R8 Performance',
    dailyPrice: '900',
    mileage: '10k',
    gas: 'Petrol',
    gearType: 'automatic',
    year: '2020',
    drivetrain: 'AWD',
    power: '612',
    engine: '5.2-liter V10',
    acceleration: '3.1 seconds ',
    max: '330 km/h',
    color: 'blue',
    seats: '2',
    torque: '580 Nm',
    calendar: [],
    equipment: [
      'MGmotorsport sports exhaust system',
      'Ceramic brakes',
      'Bang & Olufsen sound system',
      'Audi magnetic ride',
    ],
    description:
      'The Audi R8 Performance is a high-performance sports car that offers thrilling performance and stunning design. Powered by a 5.2-liter V10 engine, it delivers an impressive 612 horsepower and 580 Nm of torque. With its all-wheel drive (AWD) system and automatic transmission, it provides excellent traction and effortless acceleration. The car can sprint from 0 to 100 km/h in just 3.1 seconds and has a top speed of 330 km/h. The R8 Performance features seating for two and comes in various color options. It is a true embodiment of Audi&apos;s engineering excellence and driving pleasure. Please contact us for availability and more details.',
  },

  {
    id: 5,
    img: [
      './Ferrari 488 GTB/Ferrari 488 GTB.PNG',
      './Ferrari 488 GTB/Ferrari 488 GTB-full.PNG',
      './Ferrari 488 GTB/1.PNG',
      './Ferrari 488 GTB/2.PNG',
      './Ferrari 488 GTB/3.PNG',
    ],
    name: 'Ferrari 488 GTB',
    dailyPrice: '1000',
    mileage: '1k',
    gas: 'Petrol',
    gearType: 'automatic',
    year: '2019',
    drivetrain: 'RWD',
    power: '661',
    engine: '3.9-liter V8',
    acceleration: '3.0 seconds ',
    max: '330 km/h',
    color: 'red',
    seats: '2',
    torque: '760 Nm',
    calendar: [],
    equipment: [
      'Magneride damping',
      'Traction and stability controls (CTS)',
      'F1-Trac traction control with SSC2 (Side Slip Control 2)',
      'Electronically controlled limited-slip rear differential (E-Diff3)',
    ],
    description:
      'The Ferrari 488 GTB is a stunning sports car that represents the pinnacle of performance and Italian craftsmanship. Powered by a 3.9-liter V8 engine, it produces an impressive 661 horsepower and 760 Nm of torque. With its rear-wheel drive (RWD) configuration and automatic transmission, it offers an exhilarating driving experience. The car can accelerate from 0 to 100 km/h in just 3.0 seconds and has a top speed of 330 km/h. The 488 GTB is available in various color options and features seating for two. It is a true masterpiece that combines speed, precision, and style. Please contact us for availability and more details.',
  },
  {
    id: 6,
    img: [
      './Mustang Shelby GT500/Mustang Shelby GT500.PNG',
      './Mustang Shelby GT500/Mustang Shelby GT500-full.PNG',
      './Mustang Shelby GT500/1.PNG',
      './Mustang Shelby GT500/2.PNG',
      './Mustang Shelby GT500/3.PNG',
    ],
    name: 'Mustang Shelby GT500',
    dailyPrice: '900',
    mileage: '8k',
    gas: 'Petrol',
    gearType: 'automatic',
    year: '2022',
    drivetrain: 'RWD',
    power: '760',
    engine: '5.2-liter supercharged V8',
    acceleration: '3.3 seconds ',
    max: '299 km/h',
    color: 'green',
    seats: '4',
    torque: '847 Nm',
    calendar: [],
    equipment: [
      'Transmission: TREMEC 7-Speed DCT',
      'MagneRide Magnetic Fluid-Filled Shock Absorbers',
      'Transmission w/Sequential Shift Control w/Steering Wheel Controls and Oil Cooler',
      'Skrzynia biegów: TREMEC 7-biegowa DCT',
    ],
    description:
      'The Mustang Shelby GT500 is an iconic American muscle car that delivers uncompromising power and performance. With its 5.2-liter supercharged V8 engine, it produces an impressive 760 horsepower and 847 Nm of torque. The rear-wheel drive (RWD) configuration and automatic transmission ensure an exhilarating driving experience. The car can accelerate from 0 to 100 km/h in just 3.3 seconds and has a top speed of 299 km/h. The Shelby GT500 is available in various color options and features seating for two. It is a true testament to the Mustang legacy and is sure to turn heads wherever you go. Please contact us for availability and more details.',
  },
  {
    id: 7,
    img: [
      './Mercedes CLA45s AMG/Mercedes CLA45s AMG.PNG',
      './Mercedes CLA45s AMG/Mercedes CLA45s AMG-full.PNG',
      './Mercedes CLA45s AMG/1.PNG',
      './Mercedes CLA45s AMG/2.PNG',
      './Mercedes CLA45s AMG/3.PNG',
    ],
    name: 'Mercedes CLA45s AMG',
    dailyPrice: '250',
    mileage: '5k',
    gas: 'Petrol',
    gearType: 'automatic',
    year: '2022',
    drivetrain: 'AWD',
    power: '421',
    engine: '2.0-liter R4',
    acceleration: '4.0 seconds ',
    max: '270 km/h',
    color: 'silver',
    seats: '5',
    torque: '500 NM',
    calendar: [],
    equipment: [
      'AMG aerodynamic package',
      'AMG Performance Advanced Seat package',
      'AMG RIDE CONTROL',
      'parking package with 360° camera',
    ],
    description:
      'The Mercedes CLA45s AMG is a high-performance luxury sedan that combines power, style, and advanced technology. Equipped with a 2.0-liter R4 engine, it delivers an impressive 421 horsepower and 500 Nm of torque. With its all-wheel drive (AWD) system and automatic transmission, it offers exceptional performance and handling. The car can accelerate from 0 to 100 km/h in just 4.0 seconds and has a top speed of 270 km/h. The CLA45s AMG features a sleek silver exterior and comfortable seating for five. It comes with various equipment packages, including the AMG aerodynamic package, AMG Performance Advanced Seat package, AMG RIDE CONTROL, and parking package with a 360° camera. Experience the perfect blend of luxury and performance with the Mercedes CLA45s AMG. Please contact us for availability and more details.',
  },
  {
    id: 8,
    img: [
      './BMW M5 Competition/BMW M5 Competition.PNG',
      './BMW M5 Competition/BMW M5 Competition-full.PNG',
      './BMW M5 Competition/1.PNG',
      './BMW M5 Competition/2.PNG',
      './BMW M5 Competition/3.PNG',
    ],
    name: 'BMW M5 Competition',
    dailyPrice: '400',
    mileage: '5k',
    gas: 'Petrol',
    gearType: 'automatic',
    year: '2020',
    drivetrain: 'M xDrive',
    power: '625 KM',
    engine: '4.4L V8',
    acceleration: '3,3 seconds ',
    max: '305 km/h',
    color: 'silver',
    seats: '5',
    torque: '750 NM',
    calendar: [],
    equipment: [
      'Competition package',
      'M Carbon ceramic brake system',
      'BMW M xDrive with active M Differential rear differential',
      'MGmotorsport sports exhaust system',
    ],
    description: '',
  },
  {
    id: 9,
    img: [
      './AudiRS3/AudiRS3.PNG',
      './AudiRS3/AudiRS3-full.PNG',
      './AudiRS3/1.PNG',
      './AudiRS3/2.PNG',
      './AudiRS3/3.PNG',
    ],
    name: 'Audi RS3',
    dailyPrice: '200',
    mileage: '5k',
    gas: 'Petrol',
    gearType: 'automatic',
    year: '2022',
    drivetrain: 'AWD',
    power: '400 KM',
    engine: '2.5 l',
    acceleration: '3,8 seconds ',
    max: '250 km/h',
    color: 'yellow',
    seats: '5',
    torque: '500 Nm',
    calendar: [],
    equipment: [
      'Audi drive select adaptive suspension',
      'MGmotorsport sports exhaust system',
      'Bang & Olufsen Premium sound system with 3D sound',
    ],
    description:
      'The Audi RS3 is a high-performance compact sedan that offers thrilling driving dynamics and a stylish design. Powered by a 2.5-liter engine, it produces an impressive 400 horsepower and 500 Nm of torque. With its all-wheel drive (AWD) system and automatic transmission, it delivers exceptional acceleration, reaching 0-100 km/h in just 3.8 seconds. The RS3 has a top speed of 250 km/h. This particular Audi RS3 comes in a vibrant yellow color, adding to its sporty appeal. It has seating for five occupants and offers a range of equipment, including Audi drive select adaptive suspension, MGmotorsport sports exhaust system, and Bang & Olufsen Premium sound system with 3D sound. Experience the perfect combination of performance, comfort, and style with the Audi RS3. Please contact us for availability and more details.',
  },
];

export default cars;
