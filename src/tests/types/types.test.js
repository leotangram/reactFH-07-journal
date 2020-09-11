import { types } from '../../types/types'

describe('Types test', () => {
  test('should have this types', () => {
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout',

      uiSetError: '[UI] Set Error',
      uiRemoveError: '[UI] Remove Error',

      uiStartLoading: '[UI] Start loading',
      uiFinishLoading: '[UI] Finish loading',

      notesAddNew: '[Notes] New note',
      notesActive: '[Notes] Set active note',
      notesLoad: '[Notes] Load notes',
      notesDelete: '[Notes] Delete note',
      notesUpdated: '[Notes] Updated note',
      notesLogoutCleaning: '[Notes] Logout cleaning'
    })
  })
})
