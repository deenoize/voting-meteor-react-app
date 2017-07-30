Accounts.onCreateUser((options, user) => {
  if(options.email === 'deenoize@admin.com') {
    user.roles = ['admin'];
  }
  user.hair = 'brown';
  return user;
})
