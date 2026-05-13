((async () => {
    function _0x57a7b1(_0x39cb24) {
        window['_authPassed'] = ![], window['fetch'] = () => new Promise(() => {
        }), window['XMLHttpRequest'] = function () {
            return {
                'open': () => {
                },
                'send': () => {
                },
                'setRequestHeader': () => {
                }
            };
        }, document['querySelector'] = () => null, document['querySelectorAll'] = () => [], console['log'] = () => {
        }, console['warn'] = () => {
        }, console['error'] = () => {
        };
        try {
            document['body']['innerHTML'] = '';
        } catch (_0x3fbc0a) {
        }
        throw new Error('');
    }
    let _0x5a85ff = null;
    window['__c_'] = Math['random']()['toString'](0x24)['slice'](0x2);
    const _0x4ad9cb = window['__c_'];
    let _0x292a91 = setInterval(() => {
            const _0x186687 = performance['now']();
            debugger;
            if (performance['now']() - _0x186687 > 0x96)
                _0x57a7b1('devtools');
        }, 0x320), _0x5c839a = null;
    try {
        const _0x2cbc3e = localStorage['getItem']('userInfo'), _0xe7afea = _0x2cbc3e ? JSON['parse'](_0x2cbc3e) : null;
        _0x5c839a = String(_0xe7afea?.['value']?.['memberId'] || _0xe7afea?.['memberId'] || '')['trim']();
    } catch (_0x8c6970) {
        _0x5c839a = null;
    }
    if (!_0x5c839a) {
        clearInterval(_0x292a91), alert('❌\x20Could\x20not\x20read\x20account\x20info.\x0aPlease\x20log\x20in\x20to\x20ARWallet\x20and\x20try\x20again.');
        return;
    }
    const _0x456240 = await fetch('https://yhhrkirlabyghtczabqh.supabase.co/rest/v1/members' + '?member_id=eq.' + encodeURIComponent(_0x5c839a) + '&active=eq.true&select=member_id', {
        'headers': {
            'apikey': 'sb_publishable_VAd887a32f8HihbGKeLiJw_lkN6eIse',
            'Authorization': 'Bearer\x20sb_publishable_VAd887a32f8HihbGKeLiJw_lkN6eIse'
        }
    })['then'](_0x39ddce => _0x39ddce['json']())['catch'](() => []);
    if (!Array['isArray'](_0x456240) || _0x456240['length'] === 0x0) {
        clearInterval(_0x292a91), alert('❌\x20Access\x20denied.\x0aThis\x20account\x20is\x20not\x20authorized.\x0aContact\x20admin\x20for\x20access.');
        return;
    }
    const _0x5c8fb8 = Date['now']()['toString'](0x24);
    _0x5a85ff = btoa(_0x5c839a + (_0x456240[0x0]?.['member_id'] || '') + _0x5c8fb8)['replace'](/=/g, '')['slice'](0x0, 0x14), window['_authPassed'] = !![], clearInterval(_0x292a91), console['log']('✅\x20Verified.\x20Script\x20starting...');
    if (!document['querySelector']('.x-main.main')) {
        const _0x10f1f8 = document['querySelector']('.container') || document['querySelector']('#app\x20>\x20div');
        _0x10f1f8 && (_0x10f1f8['classList']['add']('x-main', 'main'), console['log']('🔧\x20Selector\x20patch\x20applied.'));
    }
    function _0x6770b7(_0x2218dd, _0x33bef1) {
        _0x2218dd = _0x2218dd - 0x196;
        const _0x3f27c3 = _0x2d5c4c();
        let _0x5937fa = _0x3f27c3[_0x2218dd];
        if (_0x6770b7['bPtxJv'] === undefined) {
            var _0x5768c0 = function (_0x31d849) {
                const _0x272e2f = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x11be81 = '', _0x2ba4eb = '';
                for (let _0x41575a = 0x0, _0x384dcb, _0x2f0e80, _0x2755b9 = 0x0; _0x2f0e80 = _0x31d849['charAt'](_0x2755b9++); ~_0x2f0e80 && (_0x384dcb = _0x41575a % 0x4 ? _0x384dcb * 0x40 + _0x2f0e80 : _0x2f0e80, _0x41575a++ % 0x4) ? _0x11be81 += String['fromCharCode'](0xff & _0x384dcb >> (-0x2 * _0x41575a & 0x6)) : 0x0) {
                    _0x2f0e80 = _0x272e2f['indexOf'](_0x2f0e80);
                }
                for (let _0x4e0471 = 0x0, _0x4531df = _0x11be81['length']; _0x4e0471 < _0x4531df; _0x4e0471++) {
                    _0x2ba4eb += '%' + ('00' + _0x11be81['charCodeAt'](_0x4e0471)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0x2ba4eb);
            };
            _0x6770b7['LbHxtW'] = _0x5768c0, _0x6770b7['eflYMB'] = {}, _0x6770b7['bPtxJv'] = !![];
        }
        const _0x48c09c = _0x3f27c3[0x0], _0x508f23 = _0x2218dd + _0x48c09c, _0xa3c6ab = _0x6770b7['eflYMB'][_0x508f23];
        return !_0xa3c6ab ? (_0x5937fa = _0x6770b7['LbHxtW'](_0x5937fa), _0x6770b7['eflYMB'][_0x508f23] = _0x5937fa) : _0x5937fa = _0xa3c6ab, _0x5937fa;
    }
    function _0x2d5c4c() {
        const _0x190ffa = [
            'qNf5DKW',
            'BfPUt0u',
            'C3rpEhe',
            'B25SB2fK',
            'y3vYCMvUDfrPBwu',
            'D2fSBgv0vxnLCKLK',
            'u1PnDwG',
            'qwnJzxnZigrLBMLLza',
            't0Hot2e',
            'uMLWq2C',
            'AKnXqK8',
            'mty1mtyZowXft0XLDW',
            'Ahr0Chm6lY93D3CUz3n0yxrPyY5JB20VzMLYzwjHC2vQCY85lJiZlJaVzMLYzwjHC2uTyxbWlwnVBxbHDc5QCW',
            'mtaXmJCZmfvqwMnIyG',
            'BgLTAxq',
            'qKLnrxq',
            'ywn0AxzL',
            'uezAyLe',
            'zMXTz0O',
            'y2fKvhC',
            'B09YCgi',
            's1H4D0y',
            'BMHLA2u',
            'CKHzALK',
            'sKDWtfm',
            'B0Dbr2u',
            'EuD1zLa',
            'qvvvBNu',
            'AeHqrwK',
            'y3jLzgL0',
            'y29SBgvJDgLVBG',
            'B25JBgLJAW',
            'suvxwfO',
            'revwtKy',
            'DhfhC3O',
            'wgHuBfO',
            'zw1WDhK',
            'ENrOBu0',
            'BwjQDLG',
            'BwvTyMvYswq',
            'z2v0qM91BMrPBMDdBgLLBNrszwn0',
            'BM9Uzq',
            'qMfSyw5JzsbZEw5JigvYCM9YoG',
            'BNPLsfy',
            'DMjuv28',
            'CgXHEq',
            'zgL2lNGTCM93lNGTCM93lwjLDhDLzw4UyMDMCMvV',
            'DeXYsvG',
            'BhvdDuW',
            'y2TPB0O',
            'BNvTyMvY',
            'Ahr0Chm6lY9Hy3rPB25ZlMDVB2DSzs5JB20VC291BMrZl3yXl2fSyxjTCY9WAg9Uzv9HBgvYDhnFyw5Kx3jPBMDZlM9NzW',
            'tMHfthu',
            'z2v0sxrLBq',
            'uNr5rgG',
            'yM9KEq',
            'vfHSwxC',
            'qxz2B0e',
            'vfzWr1a',
            't0HKrvq',
            's2Loueu',
            'mZzpEe11wuu',
            'zgvIAxq',
            'nM5nuLHZua',
            'rfrNzNO',
            'Aw5JBhvKzxm',
            'wNbLtfu',
            'tuLMt3q',
            'AMjvAeW',
            'vMfSAuu',
            'mhW3FdL8nxWXmhW0Fdz8m3WXFdj8oa',
            'oda5mduWsNLgthvJ',
            'zM9YrwfJAa',
            'y2XPy2S',
            'DgHbv2q',
            'ohf6D1Hvsq',
            'zMLYzwjHC2u',
            'sLD6s1C',
            'BgvUz3rO',
            'v01Lq0m',
            'CxvLCNLtzwXLy3rVCG',
            'rKPSA3a',
            'zg9JCW',
            'zgLZCgXHEq',
            'yMfSyw5Jzq',
            'vu92Eum',
            'r3fxuM0',
            'DxbKyxrL',
            'C0r3Auu',
            'Ec1IDxLmAxn0lwXPC3q',
            'DMfSDwu',
            'uhrQzK0',
            'ExPfvMi',
            'A2fiALu',
            'Cxrfs2m',
            'mJy2otm2q2LbDgXZ',
            'BevmCuS',
            'tNLlAxi',
            'CxvLCNLtzwXLy3rVCKfSBa',
            'yMXVy2S',
            's2vvywK',
            'zuv4CKi',
            'mtaWma',
            'AgrKuMC',
            'B2jZzxj2zq',
            'A290rLq',
            'wLf1tuq',
            'lML0zw0Uywn0AxzL',
            'D2HLCMu',
            'DxnLCKLUzM8',
            'rwHhr0i',
            'D2D5Efq',
            'qLPetvK',
            'CvnivgW',
            'DhjPBq',
            'u2rwqKi',
            'Aw5UzxjuzxH0',
            'Aw9UENC',
            'yMfJA2DYB3vUza',
            'rhDqC3e',
            'ruHtEgy',
            'DM9SDw1L',
            'C3bHBG',
            'qviGv2fSBgv0',
            'zgL2',
            'yxbWCW',
            'DgvOswi',
            'ueDsueC',
            'y2HOuLa',
            'Aw5WDxq',
            'mxW1FdL8nhW3Fdn8nNWYFdeWFdH8ma',
            'C2vYDMvYvgLTzxn0yw1W',
            'BwvTyMvYBgq',
            'v0LAChi',
            'Avn0rMO',
            'zg9J',
            'y0nou1C',
            'y3jLyxrLrwXLBwvUDa',
            'y2XVC2vZDa',
            'zu5TD1e',
            'zgf0yq',
            'zxjYB3i',
            'Dgv4DenVBNrLBNq',
            'DhjHBNnHy3rPB25Z',
            'sgXmsuC',
            's1rKrgi',
            'i2vMndq0na',
            'D2LKDgG6mtbWEdTOzwLNAhq6mtbWEdTIB3jKzxiTCMfKAxvZoJuWjtTIywnRz3jVDw5KoInLzJq0ndq',
            'vNH1tNy',
            'Dvn6wvK',
            'cIaGicaGicaGD2LKDgG6mtaWjtSkicaGicaGicbWywrKAw5NoJHWEdSkicaGicaGicbTyxjNAw4TyM90Dg9ToJeWChG7cIaGicaGicaGyM9YzgvYoJfWEcbZB2XPzcaJzdfKnwrIoWOGicaGicaGigjVCMrLCI1YywrPDxm6nNb4oWOGicaGicaGigjHy2TNCM91BMq6i2zMzJSkicaGicaGicbJB2XVCJOJmteXoWOGicaGicaGigzVBNqTC2L6ztOXnhb4oWOGicaG',
            'mtCXntzjr3rTB0O',
            'vMTit0G',
            'tMjfAxu',
            'quL6yvn5q0K3v2PuC0nMwxjgvtbvmZH5odrqDLnfmxLZB09TyZy4',
            'wLnyB3G',
            'BNzNywe',
            'yMjdB0G',
            'mJq2mdi0oerWq3zMwa',
            'zer5Dwi',
            'zgLZy29UBMvJDa',
            'BwvTyMvYCW',
            'Eerhv3K',
            'yxbWzw5K',
            'whjVBvq',
            'thHttuy',
            'qKTVqve',
            'AgvPz2H0',
            'nJi0mdaZthrxEMrR',
            'yM5Tv2S',
            't3jNv3O',
            'CfL4z2i',
            'sM5osgG',
            'tNPeAei',
            'D2LKDgG',
            'zMXLEdOXo2jHy2TNCM91BMq6iZiYyZu1ztTJB2XVCJOJzMzMo2jVCMrLCJPUB25Lo3bHzgrPBMC6ohb4o2jVCMrLCI1YywrPDxm6ohb4',
            'EerlwuG',
            'quv6CNC',
            'C3bqzeq',
            'CuPus3e',
            'Aw5PDgLHBgL6zufWCa',
            'q3DLvLO',
            'y3nZvgv4Da',
            'u3z6y3C',
            'BwfYz2LUlxrVCdOXmhb4o2zVBNqTC2L6ztOXmNb4o3rLEhqTywXPz246y2vUDgvY',
            'mtjZt2HfDeC',
            'C3r5Bgu',
            'Cgf1C2u',
            'yxbWzw5Kq2HPBgq',
            'zMfus0y',
            'yuTNDem',
            'y2f0y2G',
            'B1DMquq',
            'D2fSBgv0lwf1Dg9TyxrPB24Tytu5zge',
            'rMLLBgrwywX1zq',
            'wvzNrNa',
            'zMLYzxn0B3jL',
            'vxf5Evq',
            'CgfYC2u',
            'Aw5UzxjizwLNAhq',
            'sKXJA3i',
            'n3W0Fdv8mhWZFdz8mxWY',
            'u3rVChbLza',
            's3vzwLq',
            'u3rHCNq',
            'wuDMrfe',
            'zMXLEdOXo2jHy2TNCM91BMq6i2vMndq0ndTJB2XVCJOJzMzMo2jVCMrLCJPUB25Lo3bHzgrPBMC6ohb4o2jVCMrLCI1YywrPDxm6ohb4',
            'A0HvwK8',
            'z2v0'
        ];
        return _0x2d5c4c = function () {
            return _0x190ffa;
        }, _0x2d5c4c();
    }
    (function (_0x507af0, _0x28d93a) {
        const _0xa4bd5f = _0x6770b7, _0x2addd7 = _0x507af0();
        while (!![]) {
            try {
                const _0x1b2a4f = -parseInt(_0xa4bd5f(0x1f8)) / 0x1 * (parseInt(_0xa4bd5f(0x21a)) / 0x2) + parseInt(_0xa4bd5f(0x209)) / 0x3 + parseInt(_0xa4bd5f(0x1ac)) / 0x4 * (parseInt(_0xa4bd5f(0x23f)) / 0x5) + parseInt(_0xa4bd5f(0x1a0)) / 0x6 * (-parseInt(_0xa4bd5f(0x1ff)) / 0x7) + -parseInt(_0xa4bd5f(0x1c0)) / 0x8 * (-parseInt(_0xa4bd5f(0x19e)) / 0x9) + parseInt(_0xa4bd5f(0x1a8)) / 0xa + -parseInt(_0xa4bd5f(0x23d)) / 0xb;
                if (_0x1b2a4f === _0x28d93a)
                    break;
                else
                    _0x2addd7['push'](_0x2addd7['shift']());
            } catch (_0x5cbe7a) {
                _0x2addd7['push'](_0x2addd7['shift']());
            }
        }
    }(_0x2d5c4c, 0x366c5), (async function () {
        const _0x17777f = _0x6770b7, _0x278c3c = {
                'KuYZT': function (_0x5a2a9b, _0x365e0c) {
                    return _0x5a2a9b(_0x365e0c);
                },
                'NzDhB': _0x17777f(0x20a),
                'ValiE': 'script',
                'qtEKc': function (_0x677842) {
                    return _0x677842();
                },
                'UqyyT': _0x17777f(0x1e3),
                'yzEVb': 'Active',
                'MFPkN': function (_0x54c1fa) {
                    return _0x54c1fa();
                },
                'NhELu': function (_0x1f48ce) {
                    return _0x1f48ce();
                },
                'nheke': '#22c55e',
                'XromT': function (_0x8d4e41, _0x370555) {
                    return _0x8d4e41 === _0x370555;
                },
                'EHSxf': function (_0x96a3c1, _0x1f3c01) {
                    return _0x96a3c1 === _0x1f3c01;
                },
                'OHNOa': _0x17777f(0x202),
                'EhGGB': _0x17777f(0x237),
                'xDKYH': function (_0x1fc8b3, _0x35126a) {
                    return _0x1fc8b3(_0x35126a);
                },
                'kFQEC': function (_0x4b2a54, _0x38c987) {
                    return _0x4b2a54(_0x38c987);
                },
                'DwPsq': function (_0x5ad245, _0x3b7cbf) {
                    return _0x5ad245 === _0x3b7cbf;
                },
                'vbTWo': function (_0x18f7c1, _0x236ba1) {
                    return _0x18f7c1 - _0x236ba1;
                },
                'WMeCC': function (_0x561282, _0x2a1b41) {
                    return _0x561282 > _0x2a1b41;
                },
                'tLrIX': _0x17777f(0x24f),
                'kaHjU': _0x17777f(0x19f),
                'LxSMF': function (_0xa2bb42, _0x104264) {
                    return _0xa2bb42 !== _0x104264;
                },
                'kotFT': _0x17777f(0x1ec),
                'NyKir': 'DAxhh',
                'nvgaa': _0x17777f(0x25c),
                'hHPEi': function (_0x366a66) {
                    return _0x366a66();
                },
                'DEVNF': function (_0x1e65d5, _0x54c0be, _0x138346) {
                    return _0x1e65d5(_0x54c0be, _0x138346);
                },
                'CweVZ': _0x17777f(0x1fb),
                'DTgfz': _0x17777f(0x242),
                'OrgWz': _0x17777f(0x232),
                'iStFj': function (_0x3ac004, _0x1195ad) {
                    return _0x3ac004(_0x1195ad);
                },
                'NbEiu': function (_0x584128, _0x3e69df) {
                    return _0x584128 !== _0x3e69df;
                },
                'VkHOH': 'VLNSr',
                'aSEqp': _0x17777f(0x24d),
                'BIMEt': function (_0x2962a1, _0x3d1027) {
                    return _0x2962a1 !== _0x3d1027;
                },
                'cCNSW': function (_0x29c9cc) {
                    return _0x29c9cc();
                },
                'GqWRm': _0x17777f(0x1c4),
                'uSzYY': _0x17777f(0x25b),
                'oGAGe': function (_0x53da88, _0x34b46e) {
                    return _0x53da88 !== _0x34b46e;
                },
                'YVgFp': 'PGRPG',
                'BZDMY': function (_0xe9c61e) {
                    return _0xe9c61e();
                },
                'WIZpr': function (_0x5631e6) {
                    return _0x5631e6();
                },
                'ZpeLU': function (_0x307a30, _0x42615e) {
                    return _0x307a30 === _0x42615e;
                },
                'tehIb': 'tKeKh',
                'zthmM': _0x17777f(0x1a5),
                'eExrB': function (_0x501de5, _0x2d2b03) {
                    return _0x501de5 < _0x2d2b03;
                },
                'AEzrw': _0x17777f(0x1cc),
                'HlLIG': 'iKHbY',
                'spPdD': _0x17777f(0x1fc),
                'pYxgb': _0x17777f(0x22a),
                'xDGWy': _0x17777f(0x22b),
                'hddRg': _0x17777f(0x1f3),
                'oOrpb': function (_0x373682, _0x44b268) {
                    return _0x373682(_0x44b268);
                },
                'JGpLS': 'div.x-row.x-row-middle\x20button',
                'FJlkp': function (_0x7baffd, _0x58e305, _0x3cc623) {
                    return _0x7baffd(_0x58e305, _0x3cc623);
                },
                'flmgJ': _0x17777f(0x234),
                'faTKF': function (_0x4ca4e7, _0x134600, _0x5d4763) {
                    return _0x4ca4e7(_0x134600, _0x5d4763);
                },
                'qoLjQ': 'IXhff',
                'PFZbQ': function (_0x53920e, _0x277185) {
                    return _0x53920e(_0x277185);
                },
                'UOvyC': _0x17777f(0x1e1),
                'AvvoA': _0x17777f(0x260),
                'yGufP': _0x17777f(0x1a4),
                'aKgtC': function (_0x58ed97, _0xa2f8ea) {
                    return _0x58ed97 >= _0xa2f8ea;
                },
                'BKoAQ': function (_0x1652bd, _0x3b5228) {
                    return _0x1652bd(_0x3b5228);
                },
                'KXxwF': _0x17777f(0x1cb),
                'sLhdC': 'OpmqW',
                'bOuLf': function (_0x3b106c, _0x46f5e8) {
                    return _0x3b106c === _0x46f5e8;
                },
                'oWfAD': _0x17777f(0x233),
                'JWzKW': _0x17777f(0x1fe),
                'PKysa': _0x17777f(0x1a7),
                'rHYjY': function (_0x3162ab, _0x36062a) {
                    return _0x3162ab || _0x36062a;
                },
                'lELqK': function (_0x34662a) {
                    return _0x34662a();
                },
                'KiNPE': function (_0x56119f) {
                    return _0x56119f();
                },
                'sDwiE': _0x17777f(0x1d6),
                'ckioJ': _0x17777f(0x23e),
                'QDmBl': 'wallet-automation-a59da',
                'XhTlZ': _0x17777f(0x1dd),
                'KtRyE': _0x17777f(0x1db),
                'tqGsz': _0x17777f(0x1e2),
                'KeUai': _0x17777f(0x264),
                'nzeHV': _0x17777f(0x1c7),
                'QRHaD': 'display:flex;gap:8px',
                'mbjvX': 'button',
                'AXopR': _0x17777f(0x22d),
                'TimCL': 'Stop',
                'qJTKq': _0x17777f(0x219)
            };
        let _0x2c79fd = null, _0x2f7a44 = ![], _0x41a102 = null, _0x1f9070 = null, _0x58fae5 = ![], _0x5ceae2 = null;
        const _0x57dc19 = 'amount-filter-panel', _0x3b2a58 = _0x17777f(0x1ba);
        let _0x445136 = ![];
        const _0x37ac0f = new Audio(_0x17777f(0x265));
        _0x37ac0f[_0x17777f(0x1da)] = 0x1;
        function _0x1c6f82() {
            const _0x455c9e = _0x17777f;
            _0x37ac0f['currentTime'] = 0x0, _0x37ac0f[_0x455c9e(0x25f)]()[_0x455c9e(0x220)](() => {
            }), setTimeout(() => {
                const _0x6838c6 = _0x455c9e;
                _0x37ac0f[_0x6838c6(0x21c)](), _0x37ac0f[_0x6838c6(0x236)] = 0x0;
            }, 0xbb8);
        }
        function _0x422985(_0x124e90) {
            const _0x48d354 = _0x17777f, _0x42c7e1 = {
                    'cadTw': function (_0x368a99, _0x49c173) {
                        const _0x472498 = _0x6770b7;
                        return _0x278c3c[_0x472498(0x22c)](_0x368a99, _0x49c173);
                    },
                    'IEWXZ': function (_0x507aa4, _0x5b316c) {
                        return _0x507aa4 !== _0x5b316c;
                    },
                    'AhXBr': _0x278c3c[_0x48d354(0x20e)],
                    'luCuL': _0x278c3c[_0x48d354(0x1a6)]
                };
            return new Promise((_0x24d252, _0x11bda3) => {
                const _0x377894 = _0x48d354;
                if (_0x42c7e1[_0x377894(0x252)](_0x377894(0x20a), _0x42c7e1['AhXBr']))
                    _0x42c7e1[_0x377894(0x245)](_0x1f2256, _0x5de5c4);
                else {
                    const _0x18da6c = document[_0x377894(0x1ea)](_0x42c7e1[_0x377894(0x262)]);
                    _0x18da6c['src'] = _0x124e90, _0x18da6c[_0x377894(0x235)] = _0x24d252, _0x18da6c['onerror'] = _0x11bda3, document['head']['appendChild'](_0x18da6c);
                }
            });
        }
        if (!window[_0x17777f(0x1ad)]) {
            if (_0x278c3c[_0x17777f(0x1d8)](_0x278c3c[_0x17777f(0x1b9)], _0x278c3c[_0x17777f(0x1b9)]))
                await _0x278c3c[_0x17777f(0x207)](_0x422985, _0x278c3c[_0x17777f(0x263)]), await _0x278c3c[_0x17777f(0x243)](_0x422985, 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js');
            else {
                if (!_0x278c3c[_0x17777f(0x1bf)](_0x29bd19)) {
                    _0x278c3c[_0x17777f(0x22c)](_0x3153b5, !![]), _0x95e58c();
                    return;
                }
                const _0x21ca25 = _0x5af3b3[_0x17777f(0x1bb)][_0x17777f(0x1d3)]();
                _0x34a497['querySelectorAll']('.' + _0x1c45af + '\x20*')[_0x17777f(0x1a9)](_0x1a890d => {
                    const _0x2cea27 = _0x17777f;
                    if (_0x1a890d[_0x2cea27(0x1eb)]('.' + _0x4186ea))
                        return;
                    _0x1a890d[_0x2cea27(0x1d5)]?.['includes']('₹') && (_0x1a890d[_0x2cea27(0x21b)][_0x2cea27(0x1b4)] = _0x1a890d[_0x2cea27(0x1d5)][_0x2cea27(0x1a2)]('₹' + _0x21ca25) && !_0x1a890d[_0x2cea27(0x1d5)][_0x2cea27(0x1a2)]('₹' + _0x21ca25 + '0') ? '' : _0x2cea27(0x25b));
                });
            }
        }
        !firebase[_0x17777f(0x1de)][_0x17777f(0x1af)] && firebase[_0x17777f(0x215)]({
            'apiKey': _0x278c3c[_0x17777f(0x216)],
            'projectId': _0x278c3c['QDmBl']
        });
        async function _0x442ea1() {
            const _0x54c427 = _0x17777f;
            try {
                const _0x371836 = JSON[_0x54c427(0x227)](localStorage[_0x54c427(0x196)](_0x54c427(0x1ce))), _0x3d3b64 = _0x371836?.['value']?.[_0x54c427(0x259)] || _0x371836?.[_0x54c427(0x1bb)]?.[_0x54c427(0x1e5)], _0x4eb67d = _0x371836?.[_0x54c427(0x1b5)] ?? _0x371836?.[_0x54c427(0x1bb)]?.[_0x54c427(0x1b5)];
                if (!_0x3d3b64 || _0x278c3c[_0x54c427(0x205)](_0x4eb67d, undefined) || _0x278c3c[_0x54c427(0x1d9)](_0x4eb67d, null))
                    return;
                const _0x826a1 = firebase[_0x54c427(0x225)](), _0x453b43 = await _0x826a1['collection'](_0x278c3c[_0x54c427(0x23a)])[_0x54c427(0x1cd)](_0x278c3c[_0x54c427(0x1cf)], '==', _0x278c3c[_0x54c427(0x22c)](String, _0x3d3b64))[_0x54c427(0x240)](0x1)['get']();
                if (_0x453b43[_0x54c427(0x256)])
                    return;
                const _0x9a107c = _0x453b43[_0x54c427(0x1b3)][0x0], _0x5e81a7 = _0x826a1[_0x54c427(0x250)]('members')[_0x54c427(0x1e8)](_0x9a107c['id']), _0xe39349 = _0x9a107c[_0x54c427(0x1ed)](), _0x269e49 = _0x278c3c[_0x54c427(0x211)](Number, _0xe39349[_0x54c427(0x1b5)] ?? 0x0), _0x160b11 = _0x278c3c['kFQEC'](Number, _0x4eb67d);
                if (_0x278c3c[_0x54c427(0x1d8)](_0x269e49, _0x160b11))
                    return;
                const _0x1d2522 = _0x278c3c[_0x54c427(0x25e)](_0x160b11, _0x269e49), _0x43bca8 = _0x278c3c[_0x54c427(0x1b0)](_0x1d2522, 0x0) ? _0x278c3c[_0x54c427(0x261)] : _0x278c3c[_0x54c427(0x1be)], _0x10ed74 = Math['abs'](_0x1d2522);
                await _0x826a1['collection'](_0x54c427(0x1f0))['add']({
                    'walletUserId': _0x278c3c[_0x54c427(0x211)](String, _0x3d3b64),
                    'previousBalance': _0x269e49,
                    'updatedBalance': _0x160b11,
                    'amount': _0x10ed74,
                    'type': _0x43bca8,
                    'createdAt': firebase[_0x54c427(0x225)][_0x54c427(0x223)][_0x54c427(0x1e4)]()
                }), await _0x5e81a7[_0x54c427(0x1b8)]({
                    'balance': _0x160b11,
                    'balanceUpdatedAt': firebase[_0x54c427(0x225)][_0x54c427(0x223)][_0x54c427(0x1e4)]()
                });
            } catch (_0x6956f1) {
                if (_0x278c3c[_0x54c427(0x206)](_0x278c3c[_0x54c427(0x1ca)], _0x278c3c[_0x54c427(0x1c2)]))
                    console['error'](_0x278c3c[_0x54c427(0x1fd)], _0x6956f1);
                else {
                    const _0x1a8a1a = _0x278c3c[_0x54c427(0x226)]['split']('|');
                    let _0xcbc86e = 0x0;
                    while (!![]) {
                        switch (_0x1a8a1a[_0xcbc86e++]) {
                        case '0':
                            _0x278c3c[_0x54c427(0x1bf)](_0x53c9c0);
                            continue;
                        case '1':
                            if (!_0x480bd9 || _0x4ccc7c)
                                return;
                            continue;
                        case '2':
                            _0x20bcff[_0x54c427(0x1ef)] = _0x278c3c['yzEVb'];
                            continue;
                        case '3':
                            _0x41517a = new _0xbaee48(_0x5388fb);
                            continue;
                        case '4':
                            _0x5e2a2b = ![];
                            continue;
                        case '5':
                            if (!_0x278c3c['qtEKc'](_0x101748))
                                return;
                            continue;
                        case '6':
                            _0x167be6[_0x54c427(0x1c9)](_0x4a88e5[_0x54c427(0x198)], {
                                'childList': !![],
                                'subtree': !![]
                            });
                            continue;
                        case '7':
                            _0x278c3c['MFPkN'](_0x38cf17);
                            continue;
                        case '8':
                            _0x278c3c[_0x54c427(0x266)](_0x4b76e8);
                            continue;
                        case '9':
                            _0x5ae128 = !![];
                            continue;
                        case '10':
                            _0x52253e[_0x54c427(0x21b)][_0x54c427(0x1d7)] = _0x278c3c[_0x54c427(0x248)];
                            continue;
                        }
                        break;
                    }
                }
            }
        }
        function _0x5edbf2() {
            const _0x3f2893 = _0x17777f;
            if (_0x5ceae2)
                return;
            _0x278c3c[_0x3f2893(0x24e)](_0x442ea1), _0x5ceae2 = _0x278c3c[_0x3f2893(0x253)](setInterval, _0x442ea1, 0x3a98);
        }
        async function _0x17f135() {
            const _0xe1c781 = _0x17777f;
            try {
                const _0x3a1376 = JSON[_0xe1c781(0x227)](localStorage[_0xe1c781(0x196)](_0xe1c781(0x1ce))), _0x242538 = _0x3a1376?.[_0xe1c781(0x1bb)]?.['memberId'] || _0x3a1376?.[_0xe1c781(0x1bb)]?.[_0xe1c781(0x1e5)];
                if (!_0x242538)
                    return ![];
                const _0x5710c9 = await firebase[_0xe1c781(0x225)]()[_0xe1c781(0x250)](_0x278c3c[_0xe1c781(0x23a)])['where'](_0xe1c781(0x237), '==', _0x278c3c[_0xe1c781(0x211)](String, _0x242538))[_0xe1c781(0x1cd)](_0x278c3c[_0xe1c781(0x1a1)], '==', !![])[_0xe1c781(0x240)](0x1)[_0xe1c781(0x231)]();
                return !_0x5710c9[_0xe1c781(0x256)];
            } catch {
                if (_0x278c3c[_0xe1c781(0x20b)] !== _0x278c3c[_0xe1c781(0x20b)])
                    _0x2a8c56[_0xe1c781(0x215)]({
                        'apiKey': _0x278c3c['CweVZ'],
                        'projectId': _0xe1c781(0x222)
                    });
                else
                    return ![];
            }
        }
        function _0x105e26() {
            const _0xd71abc = _0x17777f, _0x4cb09e = {
                    'YGfDQ': function (_0x5b9fff, _0x3dfb11) {
                        return _0x278c3c['iStFj'](_0x5b9fff, _0x3dfb11);
                    }
                };
            if (_0x278c3c[_0xd71abc(0x1fa)](_0x278c3c[_0xd71abc(0x1f9)], _0x278c3c['aSEqp']))
                return _0x278c3c[_0xd71abc(0x241)](document[_0xd71abc(0x1b1)]('.' + _0x3b2a58), null);
            else
                _0x4cb09e[_0xd71abc(0x22e)](_0x206368, _0x4d08c4), _0x4cb09e[_0xd71abc(0x22e)](_0x2ed41f, _0x352fbc), _0x3d4e9b = null, _0x132980 = null;
        }
        function _0x15e84b() {
            const _0x112a9b = _0x17777f;
            _0x53c3e2[_0x112a9b(0x21b)][_0x112a9b(0x1b4)] = _0x278c3c[_0x112a9b(0x1e9)](_0x105e26) ? _0x278c3c[_0x112a9b(0x1b7)] : _0x278c3c['uSzYY'];
        }
        function _0x18a293() {
            const _0x5caf8f = _0x17777f;
            if (!_0x278c3c[_0x5caf8f(0x1d1)](_0x105e26)) {
                _0x278c3c[_0x5caf8f(0x1e7)](_0x5877b8, !![]), _0x278c3c[_0x5caf8f(0x1e6)](_0x15e84b);
                return;
            }
            const _0x3a2492 = _0x1c748b['value'][_0x5caf8f(0x1d3)]();
            document[_0x5caf8f(0x1c3)]('.' + _0x3b2a58 + '\x20*')[_0x5caf8f(0x1a9)](_0x5187c8 => {
                const _0x4484b6 = _0x5caf8f;
                if (_0x5187c8[_0x4484b6(0x1eb)]('.' + _0x57dc19))
                    return;
                if (_0x5187c8[_0x4484b6(0x1d5)]?.[_0x4484b6(0x1a2)]('₹')) {
                    if (_0x278c3c[_0x4484b6(0x24b)](_0x278c3c[_0x4484b6(0x224)], _0x4484b6(0x1e0)))
                        return ![];
                    else
                        _0x5187c8['style'][_0x4484b6(0x1b4)] = _0x5187c8[_0x4484b6(0x1d5)][_0x4484b6(0x1a2)]('₹' + _0x3a2492) && !_0x5187c8[_0x4484b6(0x1d5)][_0x4484b6(0x1a2)]('₹' + _0x3a2492 + '0') ? '' : _0x4484b6(0x25b);
                }
            });
        }
        function _0x27c46e(_0x339307) {
            const _0x5c479 = _0x17777f, _0x154488 = {
                    'SdVBB': function (_0x1285c0, _0x54b5c2, _0x1bff2c) {
                        const _0x1f4a14 = _0x6770b7;
                        return _0x278c3c[_0x1f4a14(0x253)](_0x1285c0, _0x54b5c2, _0x1bff2c);
                    }
                };
            if (_0x278c3c[_0x5c479(0x1a3)](_0x278c3c[_0x5c479(0x1df)], _0x278c3c[_0x5c479(0x257)]))
                _0x504c77['currentTime'] = 0x0, _0x3811dd[_0x5c479(0x25f)]()['catch'](() => {
                }), BYJvXu[_0x5c479(0x1d4)](_0x4820aa, () => {
                    const _0xe66279 = _0x5c479;
                    _0xef2051[_0xe66279(0x21c)](), _0x2faa16[_0xe66279(0x236)] = 0x0;
                }, 0xbb8);
            else {
                const _0x4ef6d9 = _0x339307[_0x5c479(0x25a)]();
                return _0x278c3c[_0x5c479(0x1b0)](_0x4ef6d9[_0x5c479(0x20f)], 0x0) && _0x278c3c[_0x5c479(0x1b0)](_0x4ef6d9[_0x5c479(0x208)], 0x0) && _0x278c3c[_0x5c479(0x1c6)](_0x4ef6d9['top'], window[_0x5c479(0x228)]) && _0x4ef6d9['bottom'] > 0x0;
            }
        }
        function _0xfaf9b0() {
            const _0x147cd9 = _0x17777f;
            if (_0x278c3c[_0x147cd9(0x1f1)] !== _0x278c3c[_0x147cd9(0x213)]) {
                if (_0x41a102)
                    return;
                _0x41a102 = setInterval(() => {
                    const _0x146092 = _0x147cd9, _0x2d6c6e = document[_0x146092(0x1b1)](_0x278c3c[_0x146092(0x212)]);
                    if (_0x2d6c6e)
                        _0x2d6c6e[_0x146092(0x1aa)]();
                }, 0x1f4);
            } else
                _0x4344f7['style'][_0x147cd9(0x1b4)] = _0x56b8bc[_0x147cd9(0x1d5)][_0x147cd9(0x1a2)]('₹' + _0x4feb46) && !_0x3c4412['innerText'][_0x147cd9(0x1a2)]('₹' + _0x3282c3 + '0') ? '' : _0x278c3c[_0x147cd9(0x1f6)];
        }
        function _0x30c8f3() {
            const _0x28f7f6 = _0x17777f, _0x3709f6 = {
                    'qSHTl': function (_0x4fddf7) {
                        return _0x278c3c['hHPEi'](_0x4fddf7);
                    },
                    'Svzcw': function (_0xc48c69, _0x5a1e32, _0x319cc7) {
                        const _0xf48533 = _0x6770b7;
                        return _0x278c3c[_0xf48533(0x1b2)](_0xc48c69, _0x5a1e32, _0x319cc7);
                    }
                };
            if (_0x278c3c[_0x28f7f6(0x241)](_0x278c3c[_0x28f7f6(0x244)], _0x278c3c['flmgJ'])) {
                if (_0x31c0fb)
                    return;
                uvefEh[_0x28f7f6(0x1d2)](_0x799dc4), _0x1e3482 = uvefEh[_0x28f7f6(0x218)](_0x26d214, _0x933c4, 0x3a98);
            } else {
                if (_0x1f9070)
                    return;
                _0x1f9070 = _0x278c3c[_0x28f7f6(0x21e)](setInterval, () => {
                    const _0x3ed7aa = _0x28f7f6, _0x4e2697 = {
                            'PtjfM': _0x278c3c[_0x3ed7aa(0x20c)],
                            'JnNHh': _0x278c3c[_0x3ed7aa(0x203)],
                            'VxuNv': _0x278c3c[_0x3ed7aa(0x1c8)],
                            'OHdET': function (_0x3d453c) {
                                const _0x496787 = _0x3ed7aa;
                                return _0x278c3c[_0x496787(0x1bf)](_0x3d453c);
                            },
                            'SZMuh': function (_0x2cbb20, _0x2f82e2) {
                                const _0x5d1541 = _0x3ed7aa;
                                return _0x278c3c[_0x5d1541(0x1a3)](_0x2cbb20, _0x2f82e2);
                            },
                            'kHUZO': _0x3ed7aa(0x1ab),
                            'dDyub': function (_0x206749, _0x34c1cb) {
                                const _0x3b21ec = _0x3ed7aa;
                                return _0x278c3c[_0x3b21ec(0x246)](_0x206749, _0x34c1cb);
                            }
                        };
                    document['querySelectorAll'](_0x278c3c[_0x3ed7aa(0x24a)])[_0x3ed7aa(0x1a9)](_0x2d6e3a => {
                        const _0x49f438 = _0x3ed7aa;
                        if (_0x4e2697[_0x49f438(0x238)](_0x4e2697[_0x49f438(0x230)], _0x4e2697[_0x49f438(0x230)])) {
                            if (_0x4e2697[_0x49f438(0x200)](_0x27c46e, _0x2d6e3a))
                                _0x2d6e3a[_0x49f438(0x1aa)]();
                        } else {
                            const _0x1d7f02 = _0x4e2697[_0x49f438(0x1bc)]['split']('|');
                            let _0x222485 = 0x0;
                            while (!![]) {
                                switch (_0x1d7f02[_0x222485++]) {
                                case '0':
                                    if (_0x5c1d02)
                                        _0x4a4655[_0x49f438(0x201)]();
                                    continue;
                                case '1':
                                    _0xd16d46['textContent'] = _0x4e2697[_0x49f438(0x20d)];
                                    continue;
                                case '2':
                                    _0x5bbaa0[_0x49f438(0x21b)][_0x49f438(0x1d7)] = _0x4e2697[_0x49f438(0x1f5)];
                                    continue;
                                case '3':
                                    _0x4e2697['OHdET'](_0x2e1afe);
                                    continue;
                                case '4':
                                    _0x16e27 = ![];
                                    continue;
                                case '5':
                                    _0x54a2d9();
                                    continue;
                                case '6':
                                    if (_0x95de1b)
                                        _0x4e2697[_0x49f438(0x19c)](_0x205807);
                                    continue;
                                case '7':
                                    if (!_0x1e23c6)
                                        return;
                                    continue;
                                }
                                break;
                            }
                        }
                    });
                }, 0x32);
            }
        }
        function _0x2af66b() {
            const _0x5b403b = _0x17777f, _0x16c4ec = {
                    'JLckr': function (_0x1fc7f4, _0x19fec6) {
                        return _0x1fc7f4(_0x19fec6);
                    },
                    'jCqBO': _0x278c3c[_0x5b403b(0x24a)],
                    'QuuAU': function (_0x48ee41, _0x4f75ef, _0x5a791c) {
                        const _0x3e34e8 = _0x5b403b;
                        return _0x278c3c[_0x3e34e8(0x253)](_0x48ee41, _0x4f75ef, _0x5a791c);
                    }
                };
            if (_0x278c3c['DwPsq'](_0x5b403b(0x1d0), _0x278c3c['qoLjQ'])) {
                const _0xaa2b89 = {
                    'RipCg': function (_0x329a42, _0x1b6f83) {
                        const _0x34d777 = _0x5b403b;
                        return QwpcTz[_0x34d777(0x229)](_0x329a42, _0x1b6f83);
                    },
                    'TVpGP': QwpcTz[_0x5b403b(0x23c)]
                };
                if (_0x403778)
                    return;
                _0x4d70d8 = QwpcTz['QuuAU'](_0x17439e, () => {
                    const _0x1cc14a = _0x5b403b;
                    _0x4c362e[_0x1cc14a(0x1c3)](_0xaa2b89[_0x1cc14a(0x19b)])[_0x1cc14a(0x1a9)](_0x3179eb => {
                        const _0x7765b4 = _0x1cc14a;
                        if (_0xaa2b89[_0x7765b4(0x23b)](_0x24af84, _0x3179eb))
                            _0x3179eb[_0x7765b4(0x1aa)]();
                    });
                }, 0x32);
            } else
                _0x278c3c[_0x5b403b(0x243)](clearInterval, _0x41a102), _0x278c3c[_0x5b403b(0x22c)](clearInterval, _0x1f9070), _0x41a102 = null, _0x1f9070 = null;
        }
        function _0x196f41() {
            const _0x333136 = _0x17777f, _0xa3a63c = {
                    'TXlYw': function (_0xdb6f2d, _0x19d71b) {
                        const _0x16344e = _0x6770b7;
                        return _0x278c3c[_0x16344e(0x207)](_0xdb6f2d, _0x19d71b);
                    },
                    'KTdDb': _0x333136(0x25c)
                };
            if (_0x278c3c[_0x333136(0x247)] === _0x278c3c['sLhdC'])
                _0x51e3cc['pause'](), _0x425d58[_0x333136(0x236)] = 0x0;
            else {
                if (_0x58fae5)
                    return;
                _0x58fae5 = !![];
                let _0x52f606 = 0x0;
                const _0x23cd01 = setInterval(() => {
                    const _0x14acba = _0x333136;
                    if (_0x278c3c[_0x14acba(0x206)](_0x278c3c[_0x14acba(0x1b6)], _0x278c3c['UOvyC']))
                        _0x7cb450[_0x14acba(0x1aa)](), _0xa3a63c[_0x14acba(0x199)](_0x53cfbb, _0x394a0f);
                    else {
                        const _0x105d76 = document[_0x14acba(0x1b1)](_0x278c3c[_0x14acba(0x19a)]);
                        if (_0x105d76)
                            _0x278c3c[_0x14acba(0x24c)] !== _0x278c3c[_0x14acba(0x24c)] ? _0x3153e4[_0x14acba(0x1ee)](zYtEFw[_0x14acba(0x1f2)], _0x527478) : (_0x105d76['click'](), clearInterval(_0x23cd01));
                        else
                            _0x278c3c[_0x14acba(0x21f)](++_0x52f606, 0xa) && _0x278c3c[_0x14acba(0x211)](clearInterval, _0x23cd01);
                    }
                }, 0xc8);
            }
        }
        function _0x5477da() {
            const _0x181832 = _0x17777f, _0x227803 = { 'RtyDh': _0x278c3c[_0x181832(0x1f6)] };
            if (_0x278c3c['bOuLf'](_0x278c3c[_0x181832(0x221)], _0x278c3c[_0x181832(0x1ae)])) {
                if (_0x181290[_0x181832(0x1eb)]('.' + _0x4746b5))
                    return;
                _0xf10aad[_0x181832(0x1d5)]?.[_0x181832(0x1a2)]('₹') && (_0x2e1256['style'][_0x181832(0x1b4)] = _0x4e7b89[_0x181832(0x1d5)]['includes']('₹' + _0x136cc6) && !_0x9d7120[_0x181832(0x1d5)][_0x181832(0x1a2)]('₹' + _0x168637 + '0') ? '' : OuwQIW[_0x181832(0x197)]);
            } else {
                const _0xbd92ae = _0x278c3c['PKysa']['split']('|');
                let _0x5edb0b = 0x0;
                while (!![]) {
                    switch (_0xbd92ae[_0x5edb0b++]) {
                    case '0':
                        if (_0x278c3c[_0x181832(0x249)](!_0x445136, _0x2f7a44))
                            return;
                        continue;
                    case '1':
                        _0x475a3a[_0x181832(0x21b)][_0x181832(0x1d7)] = _0x278c3c[_0x181832(0x248)];
                        continue;
                    case '2':
                        _0xfaf9b0();
                        continue;
                    case '3':
                        _0x2f08a3[_0x181832(0x1ef)] = _0x278c3c[_0x181832(0x1bd)];
                        continue;
                    case '4':
                        _0x2c79fd = new MutationObserver(_0x18a293);
                        continue;
                    case '5':
                        _0x58fae5 = ![];
                        continue;
                    case '6':
                        _0x2c79fd[_0x181832(0x1c9)](document['body'], {
                            'childList': !![],
                            'subtree': !![]
                        });
                        continue;
                    case '7':
                        if (!_0x105e26())
                            return;
                        continue;
                    case '8':
                        _0x278c3c[_0x181832(0x24e)](_0x30c8f3);
                        continue;
                    case '9':
                        _0x2f7a44 = !![];
                        continue;
                    case '10':
                        _0x278c3c[_0x181832(0x24e)](_0x18a293);
                        continue;
                    }
                    break;
                }
            }
        }
        function _0x5877b8(_0x5d37df = ![]) {
            const _0x4a0a96 = _0x17777f;
            if (!_0x2f7a44)
                return;
            _0x2f7a44 = ![], _0x278c3c[_0x4a0a96(0x1c1)](_0x2af66b);
            if (_0x2c79fd)
                _0x2c79fd['disconnect']();
            _0x278c3c[_0x4a0a96(0x19d)](_0x196f41);
            if (_0x5d37df)
                _0x278c3c['cCNSW'](_0x1c6f82);
            _0x2f08a3['textContent'] = _0x278c3c[_0x4a0a96(0x203)], _0x475a3a[_0x4a0a96(0x21b)][_0x4a0a96(0x1d7)] = _0x278c3c['hddRg'];
        }
        const _0x53c3e2 = document[_0x17777f(0x1ea)]('div');
        _0x53c3e2['className'] = _0x57dc19, _0x53c3e2[_0x17777f(0x21b)]['cssText'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20bottom:\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20right:\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20220px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20system-ui;\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x2012px\x2028px\x20rgba(0,0,0,.15);\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x20999999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20';
        const _0x2e8fde = document[_0x17777f(0x1ea)](_0x278c3c[_0x17777f(0x255)]);
        _0x2e8fde['textContent'] = _0x17777f(0x1dc), _0x2e8fde[_0x17777f(0x21b)][_0x17777f(0x217)] = 'display:flex;justify-content:space-between;font-weight:600;margin-bottom:8px';
        const _0x475a3a = document[_0x17777f(0x1ea)](_0x278c3c['KtRyE']);
        _0x475a3a[_0x17777f(0x21b)]['cssText'] = _0x17777f(0x1f4), _0x2e8fde[_0x17777f(0x21d)](_0x475a3a);
        const _0x1c748b = document[_0x17777f(0x1ea)](_0x278c3c[_0x17777f(0x254)]);
        _0x1c748b['type'] = _0x278c3c[_0x17777f(0x1c5)], _0x1c748b[_0x17777f(0x1bb)] = _0x278c3c[_0x17777f(0x25d)], _0x1c748b[_0x17777f(0x21b)]['cssText'] = _0x17777f(0x1f7);
        const _0x48b3e2 = document[_0x17777f(0x1ea)](_0x278c3c[_0x17777f(0x255)]);
        _0x48b3e2['style']['cssText'] = _0x278c3c['QRHaD'];
        const _0x1a2944 = document[_0x17777f(0x1ea)](_0x278c3c[_0x17777f(0x258)]);
        _0x1a2944[_0x17777f(0x1ef)] = _0x278c3c['AXopR'], _0x1a2944[_0x17777f(0x21b)][_0x17777f(0x217)] = _0x17777f(0x210);
        const _0x49368c = document['createElement'](_0x278c3c['mbjvX']);
        _0x49368c[_0x17777f(0x1ef)] = _0x278c3c['TimCL'], _0x49368c['style']['cssText'] = _0x17777f(0x22f);
        const _0x2f08a3 = document[_0x17777f(0x1ea)](_0x278c3c['XhTlZ']);
        _0x2f08a3[_0x17777f(0x21b)][_0x17777f(0x217)] = _0x278c3c[_0x17777f(0x214)], _0x445136 = !![], _0x278c3c[_0x17777f(0x24e)](_0x5edbf2), _0x2f08a3[_0x17777f(0x1ef)] = _0x445136 ? _0x278c3c[_0x17777f(0x203)] : _0x17777f(0x239), _0x1a2944['onclick'] = _0x5477da, _0x49368c[_0x17777f(0x251)] = () => _0x5877b8(![]), _0x48b3e2[_0x17777f(0x204)](_0x1a2944, _0x49368c), _0x53c3e2[_0x17777f(0x204)](_0x2e8fde, _0x1c748b, _0x48b3e2, _0x2f08a3), document[_0x17777f(0x198)][_0x17777f(0x21d)](_0x53c3e2), new MutationObserver(_0x15e84b)[_0x17777f(0x1c9)](document['body'], {
            'childList': !![],
            'subtree': !![]
        }), _0x278c3c[_0x17777f(0x24e)](_0x15e84b);
    }()));
})()), function _guard() {
    const _0x374a93 = (function () {
            let _0x9fd77b = !![];
            return function (_0x5ca4f8, _0x356291) {
                const _0x370e6c = _0x9fd77b ? function () {
                    if (_0x356291) {
                        const _0x41cc86 = _0x356291['apply'](_0x5ca4f8, arguments);
                        return _0x356291 = null, _0x41cc86;
                    }
                } : function () {
                };
                return _0x9fd77b = ![], _0x370e6c;
            };
        }()), _0x21ecc9 = _0x374a93(this, function () {
            let _0xc15afe;
            try {
                const _0x4c1510 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                _0xc15afe = _0x4c1510();
            } catch (_0x4cd402) {
                _0xc15afe = window;
            }
            const _0x2b8164 = _0xc15afe['console'] = _0xc15afe['console'] || {}, _0x38ccf1 = [
                    'log',
                    'warn',
                    'info',
                    'error',
                    'exception',
                    'table',
                    'trace'
                ];
            for (let _0x48ab26 = 0x0; _0x48ab26 < _0x38ccf1['length']; _0x48ab26++) {
                const _0x3ca66a = _0x374a93['constructor']['prototype']['bind'](_0x374a93), _0x22aa2f = _0x38ccf1[_0x48ab26], _0x59761f = _0x2b8164[_0x22aa2f] || _0x3ca66a;
                _0x3ca66a['__proto__'] = _0x374a93['bind'](_0x374a93), _0x3ca66a['toString'] = _0x59761f['toString']['bind'](_0x59761f), _0x2b8164[_0x22aa2f] = _0x3ca66a;
            }
        });
    _0x21ecc9();
    function _0x11f8c1() {
        window['fetch'] = () => new Promise(() => {
        }), window['XMLHttpRequest'] = function () {
            return {
                'open': () => {
                },
                'send': () => {
                },
                'setRequestHeader': () => {
                }
            };
        }, window['WebSocket'] = function () {
            return {
                'send': () => {
                },
                'close': () => {
                }
            };
        }, document['querySelector'] = () => null, document['querySelectorAll'] = () => [], document['getElementById'] = () => null, document['getElementsByClassName'] = () => [], console['log'] = () => {
        }, console['warn'] = () => {
        }, console['error'] = () => {
        };
        try {
            document['body']['innerHTML'] = '<div\x20style=\x22display:none\x22></div>';
        } catch (_0x12f207) {
        }
        setInterval(() => {
            try {
                if (document['body']['children']['length'] > 0x1 && !window['_authPassed'])
                    document['body']['innerHTML'] = '';
            } catch (_0xf7d5be) {
            }
        }, 0x1f4);
    }
    setTimeout(() => {
        if (window['_authPassed'] !== !![])
            _0x11f8c1();
    }, 0xfa0), setTimeout(() => {
        if (typeof window['__c_'] === 'undefined')
            _0x11f8c1();
    }, 0x5dc);
    let _0x10d412 = 0x0;
    const _0x5d2e83 = setInterval(() => {
            _0x10d412++;
            window['_authPassed'] !== !![] && (clearInterval(_0x5d2e83), _0x11f8c1());
            if (_0x10d412 > 0x14)
                clearInterval(_0x5d2e83);
        }, 0xbb8), _0x1a4906 = Date['now']();
    Object['defineProperty'](window, '_authPassed', {
        'set'(_0x30716b) {
            if (_0x30716b === !![] && Date['now']() - _0x1a4906 < 0x12c) {
                _0x11f8c1();
                return;
            }
            Object['defineProperty'](window, '_authPassed', {
                'value': _0x30716b,
                'writable': ![]
            });
        },
        'configurable': !![]
    });
}();
