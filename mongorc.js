prompt = function() {
   if (typeof db == 'undefined') {
      return '(nodb)> ';
   }

   try {
      db.runCommand({getLastError:1});
   }
   catch (e) {
      print(e);
   }

   return db+"> ";
}
EDITOR="/usr/local/bin/vim"
