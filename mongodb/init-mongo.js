db.createUser({
  user: "dev",
  pwd: "dev",
  roles: [
    {
      role: "readWrite",
      db: "demo-setup-mongodb",
    },
  ],
});
