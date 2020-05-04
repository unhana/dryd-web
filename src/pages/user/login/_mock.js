export default {
  'POST  /api/user/login': (req, res) => {
    res.send({
      success: false,
      msg: '啊这',
      data: {
        accountType: 'COACH',
        sessionId: '',
      },
    });
  },
};
