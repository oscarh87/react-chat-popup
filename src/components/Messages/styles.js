import { colors } from 'styles/variables'

const styles = {
  messagesContainer: {
    backgroundColor: colors.white,
    height: '50vh',
    maxHeight: '410px',
    overflowY: 'scroll',
    paddingTop: '10px',
  },

  fullscreenMessagesContainer: {
    height: '100%',
    maxHeight: 'none',
  },

  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '100%',
    marginRight: '10px',
  },

  message: {
    margin: '10px',
    display: 'flex',
    fontSize: '14px',
  },
}

export default styles