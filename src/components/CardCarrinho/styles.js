import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  card: {
    flexDirection: 'row',
    width: 340,
    height: 110,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderColor: '#7159c1',
    borderWidth: 1,
    marginBottom: 15,
    padding: 20,
    paddingRight: 30,
  },

  imgRelogio: {
    width: 60,
    height: 65,
  },

  viewImg: {
    justifyContent: 'center',
  },

  titleCard: {
    fontSize: 27,
    color: '#7159c1',
    fontWeight: 'bold',
  },

  subTitleCard: {
    fontSize: 13,
    color: '#B0A2DC',
  },

  buttonCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  imgButtonCard: {
    width: 33,
    height: 33,
  },
});

export default styles;
