#!/bin/sh

if ! [ $(id -u) = 0 ]; then
   echo "The script need to be run as root." >&2
   exit 1
fi

echo "Are you sure, you want to run this command? This is only intended for Mac OS 10.14+"
echo "y/n"
read answer

if [ "$answer" = 'n' ]
then
    exit
fi

echo "running setup..."

user=$(/usr/bin/logname)

# Add host path
existingFile=$(sed '/## Added by system-integration ##/,/## Added by system-integration end ##/d' /etc/hosts)

if [ -z "existingFile" ]
then
echo
else
echo "$existingFile" > /etc/hosts
fi

printf "\n$(cat ./scripts/hosts.txt)" >> /etc/hosts

# Refresh etc/hosts
dscacheutil -flushcache; killall -HUP mDNSResponder
