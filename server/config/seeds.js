const db = require('./connection');
const { User, Item, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Aviator' },
    { name: 'Military' },
    { name: 'Racing' },
    { name: 'Luxury' },
    { name: 'Dress' },
    { name: 'Sport' } 
  ]);

  console.log('categories seeded');

  await Item.deleteMany();

  const items = await Item.insertMany([
    {
      name: 'Breitling Navitimer',
      brand: 'Aviator',
      functionality: 'Chronograph',
      movement: 'self-winding mechanical',
      description:
        "The famous pilot's watch is distinguished by an innovative Slide Rule bezel that acts as a calculator to record stats while flying. Those might include fuel consumption or distance traveled. However, most Navitimer owners aren't pilots, but the Slide Rule bezel has countless everyday applications. Not to mention, the clever bezel also gives the Navitimer is unique and unmistakable aesthetic.",
      images: 'breitling-Navitimer.jpg',
      category: categories[0]._id,
      price: 6995.95,
      quantity: 5
    },
    {
      name: 'Maverick',
      brand: 'Victorinox',
      functionality: 'Chronograpgh',
      movement: 'self-winding mechanical',
      description:
        "You know your own mind, and you make your own way. Team up with our Maverick watch for a sporty, modern timepiece that embodies freedom of spirit and limitless possibilities. For the risk-taker, the rule-breaker, the rebellious-hearted, this diving watch boasts water resistance to 100m and a unidirectional rotating bezel to keep track of essential timings. With its decisive design and sleek stainless steel case, this watch makes waves above the surface, too.",
      images: 'victorinox.jpg',
      category: categories[0]._id,
      price: 900.99,
      quantity: 40
    },
    {
      name: 'Alliance',
      brand: 'Victorinnox',
      functionality:'Chronograph',
      movement: 'automatic',
      category: categories[0]._id,
      description:
        "A very cool polished gunmetal black case, which evokes the “ice black” finish that once drew me to the older Divemaster. Even typography nerds shouldn’t find too much to cry about here, with excellent consistency and legibility exhibited between the dial and the laser-engraved aluminum tachymeter bezel insert. It’s not just the sheer level of detail, but the quality as well – all amounting to a package that you’d be hard-pressed to find on even an automatic watch costing several times as much.",
      images: 'alliance.jpg',
      price: 800.00,
      quantity: 20
    },
    {
      name: 'Cosmogragh Daytona',
      brand: 'Rolex',
      functionality: 'Chronograph',
      movement: 'self-winding mechanical',
      category: categories[2]._id,
      description:
        "Introduced in 1963, the Cosmograph Daytona was designed to meet the demands of professional racing drivers. It is an icon forever joined in name and function to the high-performance world of motor sport. More than 50 years after its creation, the Cosmograph Daytona remains in a class of its own among sport chronographs and continues to transcend time.",
      images: 'cosmograph.jpeg',
      price: 2500.00,
      quantity: 6
    },
    {
      name: 'Cockpit B50',
      brand: 'Breitling',
      functionality:'Chronograh',
      movement: 'Quartz',
      description:
        "The Cockpit B50 has an ultra readable display the two white-on-black liquid crystal (LCD) screens are equipped with a unique backlighting system that offers four levels of brightness and is activated by pressing in the crown or by tilting the wrist.",
      images: 'cockpit b50.jpeg',
      category: categories[1]._id,
      price: 9200.00,
      quantity: 3
    },
    {
      name: 'Black',
      brand: 'MTM',
      functionality: 'Chronograph',
      movement: 'Automatic',
      description:
        "Behold, the MTM Black Sherman 3-GER timepiece in its perpetual beauty. This artistically elegant watch takes men's watch styles to a whole new level. The Black DLC version of the Sherman 3-GER, seen here, is an unprecedented force in the luxury watch world. Boasting a raised spring-loaded bezel option for added glass protection and a solid grade-2 titanium case & band, the MTM Sherman 3-GER cannot be compared to any other watch of its kind. It is uniquely defined as the only watch that contains a ball-bearing bracelet in the whole world.",
      images: 'black.jpeg',
      category: categories[1]._id,
      price: 9999.99,
      quantity: 2
    },
    {
      name: 'Autavia',
      brand: "Tag Heuer",
      functionality: 'Chronograph',
      movement: 'Automatic',
      description:
        "Completing the bold look, a black alligator strap with a DLC pin buckle, easily interchangeable using the quick-release button. Powered by the manufacture Calibre Heuer02 COSC Flyback movement, the reinvented classic case reveals its details and intricacies through the clear caseback.",
      images: 'autavia.jpeg',
      category: categories[3]._id,
      price: 6750.00,
      quantity: 4
    },
   
  ]);

  console.log('items seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        items: [items[0]._id, items[0]._id, items[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
