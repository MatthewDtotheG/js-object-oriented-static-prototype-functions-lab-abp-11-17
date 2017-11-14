function IcebreakerResponse(email) {
  this.email = email;
}

IcebreakerResponse.BatchCreate = function(emails) {
  return emails.map(function(userEmail)) {
    return new IcebreakerResponse(userEmail[0], userEmail[1]);
  });
};
<<<<<<< HEAD
=======

>>>>>>> 8169073ebf4f0c8c6077461de9c6aacc459a345a
