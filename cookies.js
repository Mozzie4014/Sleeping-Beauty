
function run_user_data() {
  if (getItem("userID_Sleeping_Beauty") === null) {
    console.log("user not found");
    storeItem("user_visits_Sleeping_Beauty", 0);
    storeItem("user_time_Sleeping_Beauty", 0);
    storeItem("userID_Sleeping_Beauty", str(crypto.randomUUID()));
  } else {
    console.log("user found");
    let visits = getItem("user_visits_Sleeping_Beauty");
    visits += 1;
    storeItem("user_visits_Sleeping_Beauty", visits);
    let message =
      "User with id " +
      getItem("userID_Sleeping_Beauty") +
      " has visited " +
      visits +
      " times";
    send_webhook(message);
  }
}

function send_webhook(data) {
  fetch(
    "https://discord.com/api/webhooks/1502139671336059065/KNa9w9zNmtZzTbQKXrGw7an7fOhPbMQ2lS6x6ck_ZK_PHhn9eT9dby4xNnJehpRKQ4c1",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: str(data),
      }),
    }
  );
}
