export const styles = (theme: any) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: 0,
    marginLeft: '-0.75rem',
  },
  menuIconFather: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    color: 'black',
  },

  toolbarFake: theme.mixins.toolbar,
  toolbar: {
    justifyContent: 'space-between',
    paddingLeft: 24,
    backgroundColor: 'white',

    [theme.breakpoints.down('xs')]: {
      paddingLeft: 24,
      boxShadow: theme.shadows[1],
    },
  },
  toolbarFake2: {
    justifyContent: 'space-between',
    paddingLeft: 24,
    backgroundColor: 'white',

    [theme.breakpoints.down('xs')]: {
      paddingLeft: 24,
      boxShadow: theme.shadows[1],
    },
  },
  logo: {
    height: '2em',
  },
  avatar: {
    width: '2.2em',
    height: '2.2em',
    borderRadius: '50%',
    objectFit: 'cover' as 'cover',
  },
  content: {
    flexGrow: 1,
    padding: 0,
    backgroundColor: '#FAFAFA',
    minHeight: '100vh',
  },
  paddingZero: {
    padding: 0,
  },
  cntLoader: {
    width: '100%',
    height: '100%',
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
});
