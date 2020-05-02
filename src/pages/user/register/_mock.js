// eslint-disable-next-line import/no-extraneous-dependencies
export default {
  'POST  /api/register': (_, res) => {
    res.send({
      success: false,
      msg: '就这?我裤子都不东一下的',
      code: 'JZ',
      data: {
        iii: 'i18n',
      },
    });
  },
};
