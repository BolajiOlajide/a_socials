import slackweb
import requests

def get_slack_users():
    """
    Helper function to return all slack users.
    """
    slack_token_url = os.environ.get('SLACK_TOKEN_URL')
    response = requests.get(slack_token_url)
    return response.json()['members']


def get_slack_name(user):
    """
    Helper function to get user's slack name.
    """
    members = get_slack_users()
    slack_name = None
    for member in members:
        if member.get('profile').get('email') == user.email:
            slack_name = member.get('name')
            break
    return slack_name

