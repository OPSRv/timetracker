from rest_framework import permissions


class IsPerformersOrAdminViews(permissions.IsAuthenticated):

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        return obj.performers == request.user
