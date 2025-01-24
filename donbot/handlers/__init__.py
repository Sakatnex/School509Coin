from dispatcher import dp

from . import admin_actions, group_events, personal_actions

dp.include_router(admin_actions.router)
dp.include_router(group_events.router)
dp.include_router(personal_actions.router)
