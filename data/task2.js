// {
//   "data": [
//     { "name": "John", "email": "john2@mail.com" },
//     { "name": "John", "email": "john1@mail.com" },
//     { "name": "Jane", "email": "jane@mail.com" }
//   ]
// }

// {"condition": {"include": [{"name": "John"}], "sortBy": ["email"]}}

// {"condition": {"exclude": [{"name": "John"}], "sortBy": ["email"]}}

// {"data": [{"user": "mike@mail.com", "rating": 20, "disabled": false},
// {"user": "greg@mail.com", "rating": 14, "disabled": false},
// {"user": "john@mail.com", "rating": 25, "disabled": true}]}

// {"condition": {"exclude": [{"disabled": true}], "sortBy": ["rating"]}}
