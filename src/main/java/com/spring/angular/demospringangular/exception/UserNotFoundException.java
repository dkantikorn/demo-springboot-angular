package com.spring.angular.demospringangular.exception;

/**
 *
 * User Exception
 */
public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String message) {
        super(message);
    }
}
