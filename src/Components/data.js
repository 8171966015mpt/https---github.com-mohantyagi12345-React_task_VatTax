let data = [
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Aitor",
      last: "Gallardo",
    },
    location: {
      street: {
        number: 4428,
        name: "Calle de Bravo Murillo",
      },
      city: "Logroño",
      state: "Región de Murcia",
      country: "Spain",
      postcode: 97067,
      coordinates: {
        latitude: "-20.6229",
        longitude: "-32.4306",
      },
      timezone: {
        offset: "-12:00",
        description: "Eniwetok, Kwajalein",
      },
    },
    email: "aitor.gallardo@example.com",
    login: {
      uuid: "040767ff-5073-46ed-9f20-52a86cdbb70a",
      username: "blackbear431",
      password: "welcome1",
      salt: "wbEoz5ZM",
      md5: "08c6f13aa098c449d92e8790a7e4f2f3",
      sha1: "fe970e7487099eac40d18727a5ea705b0caa553b",
      sha256:
        "d100d870c908ff6a12c1db42bbe7ec5568664b413f2db9a3da3cee21670f74c3",
    },
    dob: {
      date: "1952-09-19T23:35:29.969Z",
      age: 70,
    },
    registered: {
      date: "2014-01-11T12:25:13.718Z",
      age: 8,
    },
    phone: "937-877-406",
    cell: "657-303-604",
    id: {
      name: "DNI",
      value: "56808532-T",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/55.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/55.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/55.jpg",
    },
    nat: "ES",
  },
];

console.log(data[0].email);

const {
  gender,
  nat,
  name: { first },
  login: { username },
} = data[0];
console.log("first", gender, "\n", nat, first, "userName \n ", username);
