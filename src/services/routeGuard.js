import { useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";
import Unauthorized from "../views/Unauthorized";

export const RouteGuard = ({ ...props }) => {
  const { instance } = useMsal();
  const [isAuthorized, setIsAuthorized] = useState(false);

  const onLoad = async () => {
    const currentAccount = instance.getActiveAccount();

    if (currentAccount && currentAccount.idTokenClaims["roles"]) {
      let intersection = props.roles.filter((role) =>
        currentAccount.idTokenClaims["roles"].includes(role)
      );

      if (intersection.length > 0) {
        setIsAuthorized(true);
      }
    }
  };

  useEffect(() => {
    onLoad();
  }, [instance]);
  return (
    <>
      {isAuthorized ? (
        <>{props.children}</>
      ) : (
        <>
          <Unauthorized />
        </>
      )}
    </>
  );
};
