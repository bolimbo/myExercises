const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

// Create a file named map-filter-reduce.js in your js directory and copy the data below into it.

//     Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.


//     Use .map to create an array of strings where each element is a user's email address


// Use .reduce to transform the array into an object where the object's keys are ids and the values are objects that represent each user

const langs = []


const filt = users.filter(function (user) {
    if (user.languages.length === 4){
        return user
    }



});


langs.push(filt);

console.log(filt);
///////////////////

const mp = users.map(function (user) {
    const usr = user.email
    return usr

});


console.log(mp);

// Use .reduce to transform the array into an object where the object's keys are ids and the values are objects that represent each user

const f = users.reduce((obj , user) => {
obj[user.id] = user
      return  obj
  },
    {})



console.log(f)
