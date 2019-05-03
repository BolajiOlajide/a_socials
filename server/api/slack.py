import dotenv

from slackclient import SlackClient

dotenv.load()

# instantiate Slack & Twilio clients
slack_client = SlackClient(dotenv.get('SLACK_BOT_TOKEN'))


def get_slack_users(users=[]):
    """
    Helper function to return all slack users.
    """
    api_call = slack_client.api_call("users.list")
    if api_call.get('ok'):
        # retrieve all users so we can find our bot
        users = api_call.get('members')
    return users


def get_slack_id(user):
    """
    Helper function to get user's slack name.
    """
    members = get_slack_users()
    user_name = [member for member in members if member.get('profile').get(
        'email') == user['email']]
    return user_name[0].get('id') if user_name else ''


def notify_channel(message):
    """
    Notify the channel with the given message
        :param message:
    """
    slack_client.api_call(
        "chat.postMessage",
        channel="#andela_socials",
        text=message,
        as_user=True,
        reply_broadcast=True,
    )


def notify_user(message, slack_id, blocks = []):
    """
    Notify the user with the given id with the message
        :param message:
        :param slack_id - The slack id of the user:
    """
    return slack_client.api_call(
        "chat.postMessage",
        channel=slack_id,
        text=message,
        blocks=blocks,
        as_user=True,
        reply_broadcast=True,
    )


def get_slack_user_timezone(email):
    """
    Get the users timezone
    """

    users = get_slack_users()
    for member in users:
        if member.get('profile').get('email') == email:
            return member.get('tz')
    return ''

def slack_image(text, url):
    return {
        "type": "image",
        "title": {
            "type": "plain_text",
            "text": text
        },
        "image_url": url,
        "alt_text": text
    }

def slack_actions(block_id, elements):
    return {
        "type": "actions",
        "block_id": block_id,
        "elements": elements
    }

def create_button(text, url=False):
    button = {
        "type": "button",
        "text": {
            "type": "plain_text",
            "text": text
        }
    }
    if url: 
        button.update({"url": url})
    return button
