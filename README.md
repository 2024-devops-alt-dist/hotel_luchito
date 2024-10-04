# Projet de Gestion des Hôtels - Hôtel Clair de Lune

Ce projet est une application web développée pour la gestion des hôtels du groupe **Hôtel Clair de Lune**. Il est conçu pour permettre aux administrateurs de gérer les hôtels et les gérants, aux gérants de gérer les suites, et aux clients de consulter et réserver des chambres disponibles. Il inclut également des fonctionnalités telles que la gestion des réservations et le contact avec les établissements.

## Technologies utilisées

- **Framework Frontend** : [Next.js](https://nextjs.org/) avec React et TypeScript.
- **ORM** : [Prisma](https://www.prisma.io/) pour l'interaction avec la base de données.
- **Base de Données** : PostgreSQL, gérée dans un conteneur Docker.
- **Conteneurs** : [Docker](https://www.docker.com/) pour la configuration et gestion de la base de données.

## Fonctionnalités implémentées

### 1. **Page d'accueil**

La page d'accueil du site web, offrant une vue générale des hôtels et l'accès aux autres fonctionnalités.

### 2. **Liste des Hôtels**

Une page qui affiche la liste de tous les établissements du groupe **Hôtel Clair de Lune**, permettant aux utilisateurs de consulter les détails de chaque hôtel.

### 3. **Page des Suites Disponibles**

Une page spécifique à chaque hôtel, où les utilisateurs peuvent consulter les suites disponibles avec leurs prix, descriptions et images.

## Exigences du projet

### Histoires Utilisateurs (User Stories)

1. **US1 : Gestion des Établissements**
   - Les administrateurs peuvent créer, modifier et supprimer des hôtels pour maintenir la liste des établissements à jour.
2. **US2 : Gestion des Gérants**
   - Les administrateurs peuvent gérer les gérants, qui sont responsables d'un hôtel spécifique.
3. **US3 : Gestion des Suites**
   - Les gérants peuvent créer, modifier et supprimer des suites dans leur hôtel pour les rendre disponibles à la réservation.
4. **US4 : Consultation des Établissements et des Suites**

   - Les clients peuvent consulter les hôtels et les suites disponibles afin de planifier leurs réservations.

5. **US5 : Réservation de Suites**

   - Les clients peuvent réserver une suite en sélectionnant un hôtel, une suite, et des dates de séjour.

6. **US6 : Gestion des Réservations**

   - Les clients peuvent consulter leurs réservations et les annuler si les conditions d'annulation sont respectées (au moins 3 jours avant le séjour).

7. **US7 : Contacter les Établissements**
   - Les visiteurs peuvent contacter les hôtels pour poser des questions ou demander des services supplémentaires.

## Installation et Configuration

### Pré-requis

1. [Docker](https://www.docker.com/get-started) installé sur votre système.
2. [Node.js](https://nodejs.org/) v14+ installé.
3. [PostgreSQL](https://www.postgresql.org/) (Docker gérera la base de données).
4. [Git](https://git-scm.com/) pour cloner le dépôt.

### Cloner le dépôt

git clone https://github.com/ton-utilisateur/ton-repository.git
cd ton-repository

# Configuration de la Base de Données

## Lancez le conteneur Docker pour PostgreSQL :

docker-compose up -d

# Configurez les variables d’environnement pour que votre application puisse se connecter à la base de données

## Créez un fichier .env à la racine du projet avec le contenu suivant :

DATABASE_URL="postgresql://utilisateur:motdepasse@localhost:5432/nom_base_de_données"

## Exécutez les migrations de la base de données pour créer les tables :

npx prisma migrate dev

# Installation des dépendances

npm install

# ou

yarn install

# Lancer l’application

npm run dev

# ou

yarn dev
