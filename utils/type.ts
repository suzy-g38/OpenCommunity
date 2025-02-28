export interface AlertRuel {
    display: boolean,
    severityType: 'error' | 'warning' | 'info' | 'success',
    message: string
  }

export type SignInRule = {
    First_Name: string,
    Last_Name: string
    Username : string
    Email: string,
    Password: string,
    Confirm_Password: string,
}
export type LogInRule = {
    Email: string,
    Password: string,
}

export type CommunityLogInRule = {
    Email : string,
    name : string,
}

export type ResultForAuth = {
    isValid : boolean;
    message : string;
}


export type dataTypeForEventCreation = {
    "event-name" : string,
    "coverImageId" : string,
    "event-mode" : string,
    "event-email" : string,
    "event-date" : Date | string,
    "about-event" : string,
    "event-topic" : string[],
    "event-tag" : string[],
    "about-topic" : string[],
    "speakersProfileId" : string[],
    "speakers-name" : string[],
    "speakers-post" : string[],
    "Location" : string,
    "creatorId" : string
    "event-fees" : string,
  }