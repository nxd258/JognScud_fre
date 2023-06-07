import axios from "axios";

let n = {
  AddRoll: function (roll) {
    let data = JSON.stringify({
      Roll: roll,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/Roll/addRoll",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  ViewAllRoll: function () {
    let data = "";

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/Roll",
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  ViewRollId: function (id) {
    let data = JSON.stringify({});

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/Roll/?id=" + id,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  EditRollId: function (id) {
    let data = JSON.stringify({});

    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/Roll/edit/?id=" + id,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  DeleteRollId: function (id) {
    let data = JSON.stringify({});

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/Roll/delete/?id=" + id,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  AddRollForUser: function (idRoll, idAccount) {
    let data = JSON.stringify({
      idRoll: idRoll,
      idAccount: idAccount,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/Roll_U/addRoll",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  ViewAllRollOfUser: function () {
    let data = "";

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/Roll_U/",
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  ViewRollOfUserId: function () {
    let data = "";

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/Roll_U/?id=dsad",
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  EditRollOfUserId: function (id) {
    let data = "";

    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/Roll_U/edit/?id=" + id,
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  DeleteRollOfUser: function (id) {
    let data = JSON.stringify({});

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/Roll_U/delete/?id=" + id,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  AddCollaborate: function (NameCB, fields, email, phoneNumber) {
    let data = JSON.stringify({
      NameCB: NameCB,
      fields: fields,
      email: email,
      phoneNumber: phoneNumber,
    });

    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/Collaborater/add",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  ViewAllCollaborate: function () {
    let data = "";

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/Collaborater",
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  ViewCollaborate: function (id) {
    let data = "";

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/Collaborater?id=" + id,
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  EditCollaborate: function (id) {
    let data = "";

    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/Collaborater/edit/?id=" + id,
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  AddEvent: function (nameEvent, idUserAdmin) {
    let data = JSON.stringify({
      nameEvent: nameEvent,
      idUserAdmin: idUserAdmin,
    });

    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/Event/add",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  ViewAllEvent: function () {
    let data = "";

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/Event",
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  ViewEvent: function (id) {
    let data = "";

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/Event?id=" + id,
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  EditEvent: function (id) {
    let data = "";

    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/Event/edit/?id=" + id,
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  AddEventAN: function (
    name,
    phone,
    email,
    obj,
    numberOfCustomer,
    ageUser,
    purpose,
    timeStart,
    timeDone,
    Status,
    scope,
    timeLine,
    nameLocation,
    Location,
    capacity,
    acreage,
    rateService,
    rateSecurity,
    rateSound,
    time,
    Theme,
    Concept,
    Details_Gift,
    Details_invitationCart,
    Details_thanksCard,
    Details_food,
    Details_drink,
    Details_Recreational,
    script_host,
    script_eventPlanner,
    script_MC,
    script_issue,
    Budget
  ) {
    let data = JSON.stringify({
      typeOfEvent_AN: {
        listGuestStars: {
          CustomerInEvent_AN: {
            name: name,
            phone: phone,
            email: email,
            obj: obj,
          },
          numberOfCustomer: numberOfCustomer,
        },
        ageUser: ageUser,
        purpose: purpose,
      },
      typeOfEvent_HN: null,
      typeOfEvent_HTKH: null,
      timeStart: timeStart,
      timeDone: timeDone,
      Status: Status,
      scope: scope,
      timeLine: timeLine,
      Location: {
        name: nameLocation,
        Location: Location,
        capacity: capacity,
        acreage: acreage,
        rateService: rateService,
        rateSecurity: rateSecurity,
        rateSound: rateSound,
      },
      time: time,
      Theme: Theme,
      Concept: Concept,
      Details: {
        Gift: Details_Gift,
        invitationCart: Details_invitationCart,
        thanksCard: Details_thanksCard,
        food: Details_food,
        drink: Details_drink,
        Recreational: Details_Recreational,
      },
      script: {
        host: script_host,
        eventPlanner: script_eventPlanner,
        MC: script_MC,
        issue: script_issue,
      },
      Budget: Budget,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000//EventDetail/add",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  ViewAllEventDetailsAN: function () {
    let data = "";

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/EventDetail/",
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  ViewEventDetailsAN: function (id) {
    let data = "";

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/EventDetail/?id=" + id,
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  EditEventDetailAN: function (id) {
    let data = "";

    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/EventDetail/edit/?id=" + id,
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  AddEventHN: function (
    name,
    phone,
    email,
    obj,
    numberOfCustomer,
    timeStart,
    timeDone,
    Status,
    scope,
    timeLine,
    nameLocation,
    Location,
    capacity,
    acreage,
    rateService,
    rateSecurity,
    rateSound,
    time,
    Theme,
    Concept,
    Details_Gift,
    Details_invitationCart,
    Details_thanksCard,
    Details_food,
    Details_drink,
    Details_Recreational,
    script_host,
    script_eventPlanner,
    script_MC,
    script_issue,
    Budget
  ) {
    let data = JSON.stringify({
      typeOfEvent_AN: null,
      typeOfEvent_HN: {
        CustomerInEvent: {
          name: name,
          phone: phone,
          email: email,
          obj: obj,
        },
        numberOfCustomer: numberOfCustomer,
      },
      typeOfEvent_HTKH: null,
      timeStart: timeStart,
      timeDone: timeDone,
      Status: Status,
      scope: scope,
      timeLine: timeLine,
      Location: {
        name: nameLocation,
        Location: Location,
        capacity: capacity,
        acreage: acreage,
        rateService: rateService,
        rateSecurity: rateSecurity,
        rateSound: rateSound,
      },
      time: time,
      Theme: Theme,
      Concept: Concept,
      Details: {
        Gift: Details_Gift,
        invitationCart: Details_invitationCart,
        thanksCard: Details_thanksCard,
        food: Details_food,
        drink: Details_drink,
        Recreational: Details_Recreational,
      },
      script: {
        host: script_host,
        eventPlanner: script_eventPlanner,
        MC: script_MC,
        issue: script_issue,
      },
      Budget: Budget,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000//EventDetail/add",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  ViewAllEventDetailsHN: function () {
    let data = "";

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/EventDetail/",
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  ViewEventDetailsHN: function (id) {
    let data = "";

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/EventDetail/?id=" + id,
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  EditEventDetailHN: function (id) {
    let data = "";

    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/EventDetail/edit/?id=" + id,
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  AddEventHTKH: function (
    name,
    phone,
    email,
    obj,
    numberOfCustomer,
    purpose,
    timeStart,
    timeDone,
    Status,
    scope,
    timeLine,
    nameLocation,
    Location,
    capacity,
    acreage,
    rateService,
    rateSecurity,
    rateSound,
    time,
    Theme,
    Concept,
    Details_Gift,
    Details_invitationCart,
    Details_thanksCard,
    Details_food,
    Details_drink,
    Details_Recreational,
    script_host,
    script_eventPlanner,
    script_MC,
    script_issue,
    Budget
  ) {
    let data = JSON.stringify({
      typeOfEvent_AN: null,
      typeOfEvent_HN: null,
      typeOfEvent_HTKH: {
        listGuestStars: {
          CustomerInEvent_KHKT: {
            name: name,
            phone: phone,
            email: email,
            obj: obj,
          },
          numberOfCustomer: numberOfCustomer,
        },
        purpose: purpose,
      },
      timeStart: timeStart,
      timeDone: timeDone,
      Status: Status,
      scope: scope,
      timeLine: timeLine,
      Location: {
        name: nameLocation,
        Location: Location,
        capacity: capacity,
        acreage: acreage,
        rateService: rateService,
        rateSecurity: rateSecurity,
        rateSound: rateSound,
      },
      time: time,
      Theme: Theme,
      Concept: Concept,
      Details: {
        Gift: Details_Gift,
        invitationCart: Details_invitationCart,
        thanksCard: Details_thanksCard,
        food: Details_food,
        drink: Details_drink,
        Recreational: Details_Recreational,
      },
      script: {
        host: script_host,
        eventPlanner: script_eventPlanner,
        MC: script_MC,
        issue: script_issue,
      },
      Budget: Budget,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000//EventDetail/add",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  ViewAllEventDetailsHTKH: function () {
    let data = "";

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/EventDetail/",
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  ViewEventDetailsHTKH: function (id) {
    let data = "";

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/EventDetail/?id=" + id,
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  EditEventDetailHTKH: function (id) {
    let data = "";

    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/EventDetail/edit/?id=" + id,
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
export default n;
