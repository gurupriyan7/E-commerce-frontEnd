import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
  registerMain: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupCard: {
    width: '20%',
    height: 'auto',
    border: 'solid #3187ED 2px',
    borderRadius: '10px',
    padding: '1rem 2rem',
  },
  signupHeadding: {
    fontWeight: '600',
    fontSize: '1.5rem',
  },
  textField: {
      margin: '1rem 0',
  },
  button: {
    height: '3rem',
  },
  errorComponent:{
          color:"red"
  }
}))
