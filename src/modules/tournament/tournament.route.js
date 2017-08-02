import { Router } from 'express';
import validate from 'express-validation';

import * as tournamentController from './tournament.controller';
import {
  authJwt,
  creatorJwt,
} from '../../services/auth.services';
import tournamentValidation from './tournament.validator';

const routes = Router();

routes.post(
  '/createTournament',
  creatorJwt,
  validate(tournamentValidation.createTournament),
  tournamentController.createTournament,
);

routes.post(
  '/:id',
  creatorJwt,
  tournamentController.createMatches,
);

routes.get(
  '/',
  authJwt,
  tournamentController.getTournaments,
);

routes.get(
  '/:id',
  authJwt,
  tournamentController.getTournamentById,
);

routes.get('/tournamentId/:id', creatorJwt, tournamentController.getTournamentsByUserId)

routes.patch(
  '/:id',
  creatorJwt,
  tournamentController.updateTournament,
);

routes.delete(
  '/:id',
  creatorJwt,
  tournamentController.deleteTournament,
);

export default routes;
