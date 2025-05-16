exports.login = (req, res) => {
  const { email, password } = req.body;
  // 샘플 응답
  if (email && password) {
    res.json({ success: true, message: '로그인 성공!' });
  } else {
    res.status(400).json({ success: false, message: '이메일/비밀번호를 입력하세요' });
  }
};
