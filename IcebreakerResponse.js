function IcebreakerResponse(email) {
  this.email = email;
}

Icebreaker.BatchCreate = function(emails) {
  return emails.map(function(email)) {
    return new IcebreakerResponse(userEmail[0], userEmail[1]);
  });
};
