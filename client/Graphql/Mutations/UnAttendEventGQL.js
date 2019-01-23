import gql from 'graphql-tag';

const UNATTEND_EVENT_GQL = (eventId, clientMutationId = '', status = 'declined') => ({
  mutation: gql`
    mutation($input: AttendEventInput!){
      attendEvent(input: $input){
        newAttendance{
          id
          createdAt
          updatedAt
          status
          event{
            createdAt
            updatedAt
            id
            title
            description
            venue
            startDate
            endDate
            featuredImage
            active          
          }
        }
        clientMutationId
      }
    }`,
  variables: {
    input: {
      eventId,
      clientMutationId,
      status,
    },
  },
});
export default UNATTEND_EVENT_GQL;
