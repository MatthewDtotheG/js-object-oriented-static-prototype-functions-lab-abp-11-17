function IcebreakerResponse(email) {
  this.email = email;
}

Icebreaker.BatchCreate = function(emails) {
  return emails.map(function(userEmail)) {
    return new IcebreakerResponse(userEmail[0], userEmail[1]);
  });
};
