import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { height } from '@mui/system'

export const useStyles = makeStyles((theme: Theme) => ({
  headerMain: {
    width: '100%',
    height: '100%',
  },
  topHeaderMain: {
    width: '100%',
    height: '2rem',
    backgroundColor: '#3187ED',
    display: 'flex',
    justifyContent: 'center',
  },
  topHeaderLeft: {
    // backgroundColor: 'green',
    flex: '1',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: '4rem',
  },
  mailBox: {
    color: 'white',
    fontSize: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '1rem',
  },
  mailIcon: {
    color: 'white',
    margin: '.3rem',
  },
  mailText: {
    fontSize: '.7rem',
  },
  callBox: {
    color: 'white',
    fontSize: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '1rem',
  },
  callIcon: {
    color: 'white',
    margin: '.1rem',
  },
  callText: {
    fontSize: '.7rem',
  },
  topHeaderRight: {
    // backgroundColor: 'red',
    flex: '1',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: '4rem',
  },
  dollarIcon: {
    color: 'white',
  },
  divideIcon: {
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  langBox: {
    color: 'white',
    marginLeft: '1.5rem',
  },
  bottomHeaderMain: {
    width: '100%',
    height: '4.5rem',

  },
  bottomTopHeader: {
    width: '100%',
    height: '70%',
    display: 'flex',
    justifyContent: 'center',
  },
  bottombtHeader: {
    width: '100%',
    height: '30%',
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    width: '7rem',
    height: '2rem',
    margin: '.5rem',
  },
  classifyInput: {
    borderRadius: '8px',
    backgroundColor: '#F8F8F8',
    border: 'none',
    height: '2rem',
    alignItems: 'center',
    width: '10rem',
    margin: '.5rem 1rem',
  },
  searchInput: {
    borderRadius: '8px',
    backgroundColor: '#F8F8F8',
    border: 'none',
    height: '2rem',
    alignItems: 'center',
    width: '15rem',
    margin: '.5rem .7rem',
  },
  iconsGroup: {
    width: 'calc(100% - 50rem)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wishlistIcon: {
    color: '#4D4D4D',
    fontSize: '1.5rem',
    margin: ' 1rem ',
  },
  cartIcon: {
    color: '#4D4D4D',
    fontSize: '1.5rem',
    margin: ' 1rem ',

  },
  cartMain:{
    display:"flex",

    position: 'relative',
  },

  cartCount: {
    position: 'absolute',
    backgroundColor: '#3187ED',
    borderRadius: '50%',
    fontSize: '.7rem',
    height: '1rem',
    width: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '.8rem 0 0 1.8rem',
  },
  profileIcon: {
    color: '#4D4D4D',
    fontSize: '1.5rem',
    margin: ' 1rem ',
  },
  headerBtn: {
    '&.MuiButtonBase-root': {
      backgroundColor: '#00C6D7',
      boxShadow: ' 0px 11px 27px rgba(0, 198, 215, 0.35)',
      fontSize: '.7em',
      margin: '0 , 1rem',
    },
  },
  categoryDropDown: {
    fontWeight: '500',
    fontSize: '.8rem',
    color: '#4D4D4D',
    margin:"0 1rem"
  },
  headerlink: {
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '.9rem',
    color: '#4D4D4D',
    margin: '0  .9rem',
  },
}))
