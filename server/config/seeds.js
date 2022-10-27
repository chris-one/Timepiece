const db = require('./connection');
const { User, Item, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Aviator' },
    { name: 'Military' },
    { name: 'Racing' },
    { name: 'Driver' },
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
      image: 'breitling-Navitimer.jpg',
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
      image: 'victorinox.jpg',
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
      image: 'alliance.jpg',
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
      image: 'cosmograph.jpeg',
      price: 2500.00,
      quantity: 6
    },
    {
      name: 'Set of Wooden Spoons',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'wooden-spoons.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Camera',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'camera.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Tablet',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'tablet.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Tales at Bedtime',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Spinning Top',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Set of Plastic Horses',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'plastic-horses.jpg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Teddy Bear',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'teddy-bear.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    }
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
