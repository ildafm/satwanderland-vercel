"use client";

import { Link } from "react-router-dom";
import AudioPageMenuAndScene from "../components/AudioPageMenuAndScene";
import "../custom_style/Encyclopedia.css";

export default function Encyclopedia() {
  const items = [
    {
      id: 1,
      namaHewan: "Beruang",
      namaHewanInggris: "Bear",
      svg: "/svgs/Bear.svg",
      deskripsi:
        "Bears can sleep up to 100 days during hibernation without eating, drinking, or relieving themselves.",
      linkGambar:
        "https://img.okezone.com/content/2017/08/29/298/1765604/gawat-gara-gara-climate-change-beruang-grizzly-sekarang-jadi-vegetarian-oyfZE81rau.jpg",
      srcGambar:
        "https://lifestyle.okezone.com/read/2017/08/29/298/1765604/gawat-gara-gara-climate-change-beruang-grizzly-sekarang-jadi-vegetarian",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Mammalia",
      order: "Carnivora",
      family: "Ursidae",
      genus: "Ursus",
      species: "Ursus Arctos",
    },
    {
      id: 2,
      namaHewan: "Kucing",
      namaHewanInggris: "Cat",
      svg: "/svgs/Cat.svg",
      deskripsi:
        "Cats spend about 70% of their lives sleeping, which is about 13-16 hours a day.",
      linkGambar:
        "https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg?w=300",
      srcGambar: "https://www.britannica.com/animal/cat",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Mammalia",
      order: "Carnivora",
      family: "Felidae",
      genus: "Felis",
      species: "Felis catus",
    },
    {
      id: 3,
      namaHewan: "Ayam",
      namaHewanInggris: "Chicken",
      svg: "/svgs/Chicken.svg",
      deskripsi:
        "Chickens have the ability to recognize up to 100 faces of other chickens, including humans.",
      linkGambar:
        "https://cdn.britannica.com/18/137318-050-29F7072E/rooster-Rhode-Island-Red-roosters-chicken-domestication.jpg?w=300",
      srcGambar: "https://www.britannica.com/animal/chicken",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Mammalia",
      order: "Galliformes",
      family: "Phasianidae",
      genus: "Gallus",
      species: "Gallus gallus",
    },
    {
      id: 4,
      namaHewan: "Sapi",
      namaHewanInggris: "Cow",
      svg: "/svgs/Cow.svg",
      deskripsi:
        "Cows have good friends and can feel stressed when separated from them.",
      linkGambar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5CCX2AazODvJ_Nfcp7z1qHzOcMLQVuUZwmg&s",
      srcGambar:
        "https://www.worldanimalprotection.org.au/education/animal-facts/cows/",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Mammalia",
      order: "Artiodactyla",
      family: "Bovidae",
      genus: "Bos",
      species: "Bos taurus",
    },
    {
      id: 5,
      namaHewan: "Buaya",
      namaHewanInggris: "Crocodile",
      svg: "/svgs/Crocodile.svg",
      deskripsi:
        "Crocodiles can live to be over 70 years old and have the ability to slow down their metabolism, allowing them to survive without food for months.",
      linkGambar:
        "https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_slender_snouted_croc.jpg",
      srcGambar:
        "https://animals.sandiegozoo.org/animals/slender-snouted-crocodile",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Reptilia",
      order: "Crocodylia",
      family: "Crocodylidae",
      genus: "Crocodylus",
      species: "Crocodylus porosus",
    },
    {
      id: 6,
      namaHewan: "Anjing",
      namaHewanInggris: "Dog",
      svg: "/svgs/Dog.svg",
      deskripsi:
        "Dogs have about 1,700 taste buds, much less than humans who have about 9,000. However, their sense of smell is 10,000 to 100,000 times sharper than humans.",
      linkGambar:
        "https://www.animalfunfacts.net/images/stories/photos/mammals/carnivores/dog/dog_facts_l.jpg",
      srcGambar: "https://www.animalfunfacts.net/carnivores/125-dog.html",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Mammalia",
      order: "Carnivora",
      family: "Canidae",
      genus: "Canis",
      species: "Canis lupus",
    },
    {
      id: 7,
      namaHewan: "Rubah",
      namaHewanInggris: "Fox",
      svg: "/svgs/Fox.svg",
      deskripsi:
        "Foxes have vertical pupils like cats, which helps them see well in low light and be effective hunters at night.",
      linkGambar:
        "https://www.animalfunfacts.net/images/stories/photos/mammals/carnivores/fox/red_fox_l.jpg",
      srcGambar: "https://www.animalfunfacts.net/carnivores/123-red-fox.html",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Mammalia",
      order: "Carnivora",
      family: "Canidae",
      genus: "Vulpes ",
      species: "Vulpes vulpes",
    },
    {
      id: 8,
      namaHewan: "Katak",
      namaHewanInggris: "Frog",
      svg: "/svgs/Frog.svg",
      deskripsi:
        "Some frog species can freeze their bodies during winter and come back to life when the temperature warms up, thanks to the natural 'antifreeze' in their blood.",
      linkGambar:
        "https://www.animalfunfacts.net/images/stories/photos/amphibians_reptiles/frogs/bullfrog/bullfrog_american_l.jpg",
      srcGambar: "https://www.animalfunfacts.net/frogs.html",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Amphibia",
      order: "Anura",
      family: "Ranidae",
      genus: "Rana",
      species: "Rana temporaria",
    },
    {
      id: 9,
      namaHewan: "Jerapah",
      namaHewanInggris: "Giraffe",
      svg: "/svgs/Giraffe.svg",
      deskripsi:
        "Giraffes have a tongue about 45 cm long that is dark in color, helping to protect against sunburn as they eat leaves in the treetops.",
      linkGambar:
        "https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_giraffe_1_0.jpg",
      srcGambar: "https://animals.sandiegozoo.org/animals/giraffe",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Mammalia",
      order: "Artiodactyla",
      family: "Giraffidae",
      genus: "Giraffa",
      species: "Giraffa camelopardalis",
    },
    {
      id: 10,
      namaHewan: "Koala",
      namaHewanInggris: "Koala",
      svg: "/svgs/Koala.svg",
      deskripsi:
        "Koalas sleep up to 18-22 hours a day to conserve energy as their main food, eucalyptus leaves, is very low in nutrients.",
      linkGambar:
        "https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_koala02%20copy.jpg",
      srcGambar: "https://animals.sandiegozoo.org/animals/koala",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Mammalia",
      order: "Diprotodontia",
      family: "Phascolarctidae",
      genus: "Phascolarctos",
      species: "Phascolarctos cinereus",
    },
    {
      id: 11,
      namaHewan: "Singa",
      namaHewanInggris: "Lion",
      svg: "/svgs/Lion.svg",
      deskripsi:
        "Male lions have manes that indicate their health and level of dominance. The darker the mane, the more attractive they are to lionesses.",
      linkGambar:
        "https://www.animalfunfacts.net/images/stories/photos/mammals/carnivores/lion/lion_mane_l.jpg",
      srcGambar: "https://www.animalfunfacts.net/carnivores/129-lion.html",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Mammalia",
      order: "Carnivora",
      family: "Felidae",
      genus: "Panthera",
      species: "Panthera leo",
    },
    {
      id: 12,
      namaHewan: "Monyet",
      namaHewanInggris: "Monkey",
      svg: "/svgs/Monkey.svg",
      deskripsi:
        "Some monkey species use simple tools, such as stones, to crack hard foods like nuts. This indicates a high level of intelligence.",
      linkGambar:
        "https://www.animalfunfacts.net/images/stories/photos/mammals/primates/capuchin_monkey/capuchin_monkey_cute_l.jpg",
      srcGambar: "https://animals.sandiegozoo.org/animals/vervet-monkey",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Mammalia",
      order: "Primates",
      family: "Cebidae",
      genus: "Cebus",
      species: "Cebus apella",
    },
    {
      id: 13,
      namaHewan: "Burung Hantu",
      namaHewanInggris: "Owl",
      svg: "/svgs/Owl.svg",
      deskripsi:
        "Owls have the ability to rotate their heads up to 270 degrees, thanks to their unique bone structure and blood vessels.",
      linkGambar:
        "https://animals.sandiegozoo.org/sites/default/files/2016-10/animals_hero_owl.jpg",
      srcGambar: "https://animals.sandiegozoo.org/animals/owl",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Aves",
      order: "Strigiformes",
      family: "Strigidae ",
      genus: "Strix ",
      species: "Strigiformes",
    },
    {
      id: 14,
      namaHewan: "Panda",
      namaHewanInggris: "Panda",
      svg: "/svgs/Panda.svg",
      deskripsi:
        "Pandas spend more than 12 hours a day eating bamboo, which makes up 99% of their diet.",
      linkGambar:
        "https://animals.sandiegozoo.org/sites/default/files/2016-09/panda1_10.jpg",
      srcGambar: "https://animals.sandiegozoo.org/animals/giant-panda",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Mammalia",
      order: "Carnivora",
      family: "Ursidae ",
      genus: "Ailuropoda ",
      species: "Ailuropoda melanoleuca",
    },
    {
      id: 15,
      namaHewan: "Penguin",
      namaHewanInggris: "Penguin",
      svg: "/svgs/Penguin.svg",
      deskripsi:
        "Penguins are flightless birds, but they can swim at speeds of up to 35 km/h.",
      linkGambar:
        "https://animals.sandiegozoo.org/sites/default/files/2016-10/animals_hero_penguin_02_1.jpg",
      srcGambar: "https://animals.sandiegozoo.org/animals/african-penguin",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Aves",
      order: "Sphenisciformes",
      family: "Spheniscidae ",
      genus: "Aptenodytes ",
      species: "Aptenodytes forsteri",
    },
    {
      id: 16,
      namaHewan: "Babi",
      namaHewanInggris: "Pig",
      svg: "/svgs/Pig.svg",
      deskripsi:
        "Pigs are highly intelligent animals and have the ability to recognize themselves in a mirror.",
      linkGambar:
        "https://animals.sandiegozoo.org/sites/default/files/inline-images/red_river_piglets_animals.jpg",
      srcGambar:
        "https://animals.sandiegozoo.org/animals/wild-swine-pig-and-hog",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Mammalia",
      order: "Artiodactyla",
      family: "Suidae ",
      genus: "Sus ",
      species: "Sus scrofa",
    },
    {
      id: 17,
      namaHewan: "Puma",
      namaHewanInggris: "Puma",
      svg: "/svgs/Puma.svg",
      deskripsi:
        "Pumas can jump up to 6 meters up and 12 meters forward in a single leap.",
      linkGambar:
        "https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_mountainlion%20copy.jpg",
      srcGambar:
        "https://animals.sandiegozoo.org/animals/mountain-lion-puma-cougar",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Mammalia",
      order: "Carnivora",
      family: "Felidae",
      genus: "Puma",
      species: "Puma concolor",
    },
    {
      id: 18,
      namaHewan: "Kelinci",
      namaHewanInggris: "Rabbit",
      svg: "/svgs/Rabbit.svg",
      deskripsi:
        "Rabbits' teeth continue to grow throughout their lives, so they must constantly chew to erode them.",
      linkGambar:
        "https://www.animalfunfacts.net/images/stories/pets/rabbits/pet_rabbits_l.jpg",
      srcGambar:
        "https://www.animalfunfacts.net/pets/pet-rabbits/1544-pet-rabbits-pros-and-cons.html",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Mammalia",
      order: "Lagomorpha",
      family: "Leporidae",
      genus: "Oryctolagus",
      species: "Oryctolagus cuniculus",
    },
    {
      id: 19,
      namaHewan: "Domba",
      namaHewanInggris: "Sheep",
      svg: "/svgs/Sheep.svg",
      deskripsi:
        "Sheep have a remarkable memory and can recognize the faces of up to 50 other sheep for more than 2 years.",
      linkGambar:
        "https://cdn.britannica.com/13/128613-004-01F10579/Flock-sheep-Dubois-Idaho.jpg?w=300",
      srcGambar:
        "https://www.britannica.com/animal/domesticated-sheep#ref1252870",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Mammalia",
      order: "Artiodactyla",
      family: "Bovidae",
      genus: "Ovis",
      species: "Ovis aries",
    },
    {
      id: 20,
      namaHewan: "Tupai",
      namaHewanInggris: "Squirrel",
      svg: "/svgs/Squirrel.svg",
      deskripsi:
        "Squirrels often forget where they bury their food, which helps trees grow from the seeds left behind.",
      linkGambar:
        "https://www.humanesociety.org/sites/default/files/styles/1660_max/public/2018/08/squirrel-399911.jpg?itok=cLRDaYKM",
      srcGambar: "https://www.humanesociety.org/animals/squirrels",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Mammalia",
      order: "Scandentia",
      family: "Tupaiidae",
      genus: "Tupaia",
      species: "Tupaia glis",
    },
    {
      id: 21,
      namaHewan: "Harimau",
      namaHewanInggris: "Tiger",
      svg: "/svgs/Tiger.svg",
      deskripsi:
        "Tigers have unique stripe patterns like human fingerprints that are never the same between individuals.",
      linkGambar:
        "https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_full/77ic6i4qdj_Medium_WW226365.jpg",
      srcGambar: "https://www.worldwildlife.org/species/tiger",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Mammalia",
      order: "Carnivora",
      family: "Felidae",
      genus: "Panthera",
      species: "Panthera tigris",
    },
    {
      id: 22,
      namaHewan: "Serigala",
      namaHewanInggris: "Wolf",
      svg: "/svgs/Wolf.svg",
      deskripsi:
        "Wolves can howl to strengthen their pack bonds and convey messages up to 10 km away.",
      linkGambar:
        "https://i.natgeofe.com/n/362aaf8c-90ae-4543-94ec-370cb2682760/00000169-5527-d57a-a3fb-fde762030000.jpg?wp=1&w=1600&h=900",
      srcGambar:
        "https://www.nationalgeographic.com/animals/mammals/facts/gray-wolf",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Mammalia",
      order: "Carnivora",
      family: "Canidae",
      genus: "Canis",
      species: "Canis lupus",
    },
  ];

  // bagian yang atas ini untuk insert content
  // bagian abis return itu untuk layout gridnya
  return (
    <>
      <AudioPageMenuAndScene currentScene={"Encyclopedia"} />

      {/* background */}
      <div
        name=""
        className="
        bg-gradient-to-b bg-gray-500 w-full 
        min-h-screen text-center md:text-left overflow-auto"
      >
        {/* <div id="backgroundEncylopedia"> */}
        <div name="" className="min-h-screen text-center md:text-left">
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
            <div className="max-w-screen-lg p-4 mx-auto flex items-center justify-between w-full">
              {/* button kembali */}
              <a href="/" className="p-2 rounded">
                👈
                <span className="border-b-4 border-white text-white">Back</span>
              </a>

              <p className="text-4xl font-bold inline border-b-4 border-white text-right text-white">
                Encyclopedia
              </p>
            </div>

            <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-4 sm:px-5">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="text-center background-2 w-full h-auto p-4"
                >
                  <Link
                    to="/detail-hewan"
                    state={item}
                    className="px-6 py-3 m-4 duration-200 hover:scale-105 block"
                    // onClick={() => window.open(link, "_blank")}
                  >
                    <img
                      src={item.svg}
                      alt=""
                      className="rounded-md duration-200 block mx-auto size-24"
                    />
                    <p className="inline font-bold">
                      {item.namaHewanInggris} <br />
                      <u>
                        <i> {item.species}</i>
                      </u>
                    </p>
                  </Link>

                  {/* <div className="flex items-center justify-center">
                  <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    onClick={() => window.open(link, "_blank")}
                  >
                    button
                  </button>
                </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
