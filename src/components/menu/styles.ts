export const styles = (theme: any) => ({
  toolbar: theme.mixins.toolbar,
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 240,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    top: '63px !important',
    width: 240,
    backgroundColor: 'blue',
    color: 'grey',
    transition: 'transform 700ms',
  },
  separator: {
    backgroundColor: 'red',
  },
  // User Info
  avatar: {
    width: '2.75rem',
    height: '2.75rem',
    borderRadius: '50%',
    objectFit: 'cover' as 'cover',
    margin: '1em 0 -0.5em 1em',
  },
  // Menu Items
  menuItem: {
    textDecoration: 'none',
    color: 'red',
    backgroundColor: 'blue',
  },
  activeOption: {
    color: 'green',
    backgroundColor: 'red',
  },
  cntItemOption: {
    paddingTop: '0.84375rem',
    paddingBottom: '0.84375rem',
    backgroundColor: 'inherit !important',
  },
  menuItemLabel: {
    color: 'inherit',
  },
  menuItemLabelSecondary: {
    color: 'grey',
  },
  cntMenuIcon: {
    color: 'red',
  },
  cntMenuIconActive: {
    color: 'green',
  },
  menuIcon: {
    color: 'inherit',
  },
});
