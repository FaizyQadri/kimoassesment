const useSurfingController = () => {
  const spotsData = [
    {id: 1, title: '1. Maui', img: require('../../assets/images/maui.png')},
    {
      id: 2,
      title: '2. Kauai',
      img: require('../../assets/images/kauai.png'),
    },
    {
      id: 3,
      title: '3. Honolulu',
      img: require('../../assets/images/honolulu.png'),
    },
  ];
  return {
    spotsData,
  };
};

export {useSurfingController};
