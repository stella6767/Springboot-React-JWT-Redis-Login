package com.kang.velogbackend.web;

import com.kang.velogbackend.congfig.auth.PrincipalDetails;
import com.kang.velogbackend.web.dto.CMRespDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private static final Logger log = LoggerFactory.getLogger(UserController.class);

    @GetMapping("user/test")
    public CMRespDto<?> test(@AuthenticationPrincipal PrincipalDetails principalDetails){

        log.info("token이 만료되었다면 여기를 못 탈 것이여..");

        log.info(principalDetails.getUser().toString());

        return new CMRespDto<>(1, "토큰이 만료되지 않았네",null );
    }






}
