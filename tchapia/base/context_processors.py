def notifications(request):
    """
    Context processor to add notification data to all templates
    """
    context = {}

    if request.user.is_authenticated:
        # Handle artisan, client, and users who are both
        try:
            unread_count = 0
            recent_notifications = []

            if request.user.user_type in ['artisan', 'both']:
                handyman = getattr(request.user, 'handyman_profile', None)
                if handyman:
                    unread_count += handyman.notifications.filter(is_read=False).count()
                    recent_notifications += list(handyman.notifications.all()[:5])

            if request.user.user_type in ['client', 'both']:
                customer = getattr(request.user, 'customer_profile', None)
                if customer:
                    unread_count += customer.notifications.filter(is_read=False).count()
                    recent_notifications += list(customer.notifications.all()[:5])

            # Sort recent_notifications by created_at descending and keep top 5
            recent_notifications = sorted(recent_notifications, key=lambda n: n.created_at, reverse=True)[:5]

            context['unread_notifications_count'] = unread_count
            context['recent_notifications'] = recent_notifications
        except Exception:
            context['unread_notifications_count'] = 0
            context['recent_notifications'] = []
    else:
        context['unread_notifications_count'] = 0
        context['recent_notifications'] = []

    return context