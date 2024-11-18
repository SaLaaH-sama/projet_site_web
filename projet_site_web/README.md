(j'ai re upload mon dossier web car le 1er dépassé les 3 mo à cause du rapport (pdf))
### Initialisation de la base de données

Le fichier `php/techcompany.sql` contient toutes les requêtes nécessaires pour créer et remplir la base de données initiale.

#### Instructions pour l'importation avec MySQL

1. Assurez-vous d'avoir installé MySQL.
2. Exécutez la commande suivante pour importer la base de données depuis le fichier `php/techcompany.sql` :

   mysql -u root -p techcompany < php/techcompany.sql

### Requêtes SQL dans le code PHP

En plus du fichier `php/techcompany.sql` qui initialise la base de données, certaines opérations sur la base de données sont effectuées directement dans le code PHP.

Les fichiers PHP contenant des requêtes SQL se trouvent dans le dossier `php/`.