const models = require('../models');

exports.main = (_, res) => {
  res.render('index');
};

exports.getCustomers = async (_, res) => {
  const result = await models.Customer.findAll();
  console.log(result);

  res.render('customer', { customers: result });
};

exports.getOrderlists = async (_, res) => {
  const result = await models.Orderlist.findAll();
  console.log(result);

  res.render('orderlist', { orderlists: result });
};

// JOIN -> Sequelize include 옵션으로 구현 가능
exports.getTotal = async (_, res) => {
  const result = await models.Customer.findAll({
    // attributes: ['user_id', 'name'], // 일부 컬럼이 필요한 경우, attirbutes 옵션 사용 가능
    include: [
      // { model: models.Orderlist, attributes: ['product_name', 'quantity'] },
      { model: models.Orderlist },
    ],
    raw: true, // 단순히 값을 사용하려는 경우, 조회 결과를 객체로 표기하는 옵션인 raw: true 설정 필요
    // https://www.google.com/search?q=sequelize+raw+true+%EC%9D%98%EB%AF%B8&oq=sequelize+raw+true+%EC%9D%98%EB%AF%B8&aqs=edge..69i57j0i512j0i30l2j0i8i30l3j69i60.6159j0j1&sourceid=chrome&ie=UTF-8
  });

  // * Chrome 브라우저의 경우, JSONVue 확장프로그램 설치시 데이터 출력 결과를 가독성있게 볼 수 있음
  // 설치하러 가기: https://chrome.google.com/webstore/detail/jsonvue/chklaanhfefbnpoihckbnefhakgolnmc
  res.send(result);
};

// 쿼리문이 복잡한 경우 query() 메서드를 이용해 raw query 사용
exports.getSql = async (_, res) => {
  const query = `SELECT * 
    FROM customer
    INNER JOIN orderlist
    ON customer.user_id = orderlist.customer_id;`;

  const result = await models.sequelize.query(query, {
    type: models.sequelize.QueryTypes.SELECT,
  });

  res.send(result);
};

exports.deleteCustomer = async (req, res) => {
  // /getCustomers 경로에서 특정 유저 삭제 후, /getOrderlists 접속시 연관된 상품 정보 삭제 됨
  await models.Customer.destroy({
    where: {
      user_id: req.body.userid,
    },
  });

  res.send(
    `${req.body.userid} 유저 삭제 성공! 전체 주문 목록 페이지로 이동하여 해당 유저에 대한 주문 목록이 삭제됐는지 확인해보세요!!`,
  );
};
