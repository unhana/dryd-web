// eslint-disable-next-line import/no-extraneous-dependencies
export default {
  'POST  /api/register': (_, res) => {
    res.send({
      success: false,
      msg: '就这?',
      code: 'JZ',
      data: {
        iii: 'i18n',
      },
    });
  },
};
