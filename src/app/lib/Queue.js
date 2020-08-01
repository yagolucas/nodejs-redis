import Queue from "bull";
import redisConfig from "../../config/redis";

import RegistrationMails from "../jobs/RegistrationMail";

const mailQueue = new Queue(RegistrationMails.key, redisConfig);

export default mailQueue;