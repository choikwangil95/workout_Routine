from rest_framework import serializers
from .models import BackRoutine, Drip
from django.contrib.auth.models import User

class BackRoutineSerializer(serializers.ModelSerializer):
    class Meta:
        model = BackRoutine
        fields = ("user_pk",
            'deadligft_reps',
            "deadligft_set",
            "deadligft_weight",
            'pullup_reps',
            'pullup_set',
            'pullup_weight',
            'b_row_reps',
            'b_row_set',
            'b_row_weight',
            'd_row_reps',
            'd_row_set',
            'd_row_weight',
            'o_a_d_row_reps',
            'o_a_d_row_set',
            'o_a_d_row_weight',
            'lackpull_reps',
            'lackpull_set',
            'lackpull_weight',
            'let_pull_down_reps',
            'let_pull_down_set',
            'let_pull_down_weight',
            'seated_cable_row_reps',
            'seated_cable_row_set',
            'seated_cable_row_weight',
            'mon',
            'tue',
            'wed',
            'thu',
            'fri',
            'sat',
            'sun',
        )
        read_only_fields = ('user',)

class DripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drip
        fields = "__all__"