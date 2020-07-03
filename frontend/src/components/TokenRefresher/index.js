import { connect } from "react-redux";
import { getTokenExpire } from "../../helpers/jwt";
import { getToken } from "../../helpers/account";
import { getFreshToken } from "../../actions/AccountActions";
import { useEffect } from "react";

const TokenRefresher = ({ getFreshToken }) => {
  const TRESHOLD = 40;

  const calculate = () => {
    const token = getToken();
    const expires = getTokenExpire(token);
    const secondsToExpire = expires - Date.now() / 1000;

    return secondsToExpire;
  };

  useEffect(() => {
    const secondsToExpire = calculate() - TRESHOLD;
    const id = setTimeout(getFreshToken, secondsToExpire * 1000);

    return () => clearTimeout(id);
  }, [getFreshToken]);

  return null;
};

const mapStateToProps = (state) => {
  return { account: state.account.account };
};

export default connect(mapStateToProps, { getFreshToken })(TokenRefresher);
