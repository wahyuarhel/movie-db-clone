
export enum PopularMoviesResponseEnum {
  pending = 'pending',
  success = 'fulfilled',
  failed = 'rejected'
}
export type PopularMoviesResponseType = {
  type: PopularMoviesResponseEnum
}